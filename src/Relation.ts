import { Type } from './Type';
import { Definitions } from './Definitions';
import { Types } from './Types';
import { MapInput, toMap, reverseMap, now } from './fns';
import { EntityPropPair, EntityProps, EntityKeyType } from './Entity';
import { EventBase } from './EventBase';
import { DataTypes } from './DataTypes';


export interface RelationTypeKey
{
  name: string;
  props: string[];
}

export interface RelationOptions
{
  name: string;
  created: number;
  updated: number;
  kind: RelationKind;
  subject: RelationTypeKey;
  subjectRelationName?: string;
  morphs?: [string, any];
  morphsToRelated?: MapInput<any, string>;
  related: RelationTypeKey[];
  relatedRelationName?: string;
  multiple?: boolean;
  required?: boolean;
  owns?: boolean;
  extension?: boolean;
}

export interface EntityRelation
{
  relation: Relation;
  name: string;
  kind: RelationKind;
  related: RelationTypeKey[];
  morphs?: EntityPropPair;
  morphsToRelated?: Map<any, string>;
  relatedToMorphs?: Map<string, any>;
  where?: [string, any];
  itemType: Type;
  relationType: Type;
  cascade: RelationCascade;
  local: string[];
}

export enum RelationKind
{
  HAS_MANY,
  BELONGS_TO,
  HAS_ONE,
  ONE,
  HAS_ONE_POLYMORPHIC,
  ONE_POLYMORPHIC,
}

export enum RelationCascade
{
  NONE,
  CASCADE,
  SET_NULL,
  RESTRICT
}

export interface RelationEvents
{
  changed(relation: Relation): void;
  renamed(relation: Relation, oldName: string): void;
  sync(relation: Relation, options: RelationOptions | Relation, defs: Definitions): void;
}

export class Relation extends EventBase<RelationEvents>
{

  /**
   * A unique name for the relationship between the subject type and related types.
   */
  public name: string;

  /**
   * When the relation was created.
   */
  public created: number;

  /**
   * When the relation was last updated.
   */
  public updated: number;
  
  /**
   * A name-props pair for the type that has the foreign key. The name is the
   * aliased type name and the props are the properties on it that reference
   * the related type or types.
   */
  public subject: RelationTypeKey; 
  
  /**
   * The name the subject uses to refer to the related types.
   */
  public subjectRelationName: string;

  /**
   * A name-type pair for a property that exists on the subject type that is 
   * used to determine which related type.
   */
  public morphs?: EntityPropPair;

  /**
   * A map of values from the morphs property to the related type names.
   */
  public morphsToRelated: Map<any, string>;

  /**
   * The list of name-prop pairs that the subject type can be related to based
   * on the morph 
   */
  public related: RelationTypeKey[];
  
  /**
   * The name the related types use to refer to the subject.
   */
  public relatedRelationName: string;

  /**
   * A map from related type names to the morph value.
   */
  public relatedToMorphs: Map<string, any>;

  /**
   * The kind of relation created.
   */
  public kind: RelationKind;

  /**
   * List or single related instance?
   */
  public multiple: boolean;

  /**
   * Remove subject if related is removed
   */
  public required: boolean;

  /**
   * When related is being removed, stop it. I own it. But when subject is
   * removed then remove the related.
   */
  public owns: boolean;

  /**
   * Related types extend the subject, the subject has a morph value to know
   * which type it is.
   */
  public extension: boolean;

  /**
   * Needed for retrieving aliased types and their current properties.
   */
  protected defs: Definitions;

  
  public constructor(defs: Definitions, options: RelationOptions)
  {
    super();

    this.defs = defs;
    this.name = options.name;
    this.updated = options.updated || now();
    this.created = options.created || now();
    this.kind = options.kind;
    this.subject = options.subject;
    this.subjectRelationName = options.subjectRelationName || options.related[0].name;
    this.morphs = options.morphs
      ? this.decodeTypePair(options.morphs)
      : undefined;
    this.morphsToRelated = toMap(options.morphsToRelated);
    this.related = options.related;
    this.relatedRelationName = options.relatedRelationName || options.subject.name;
    this.relatedToMorphs = reverseMap(this.morphsToRelated);
    this.multiple = !!options.multiple;
    this.required = !!options.required;
    this.owns = !!options.owns;
    this.extension = !!options.extension;
  }

  public sync(options: RelationOptions | Relation, defs: Definitions)
  {
    if (this.hasChanges(options))
    {
      this.name = options.name;
      this.updated = options.updated || now();
      this.created = options.created || now();
      this.kind = options.kind;
      this.subject = options.subject;
      this.subjectRelationName = options.subjectRelationName || options.related[0].name;
      this.morphs = options.morphs
        ? this.decodeTypePair(options.morphs)
        : undefined;
      this.morphsToRelated = toMap(options.morphsToRelated);
      this.related = options.related;
      this.relatedRelationName = options.relatedRelationName || options.subject.name;
      this.relatedToMorphs = reverseMap(this.morphsToRelated);
      this.multiple = !!options.multiple;
      this.required = !!options.required;
      this.owns = !!options.owns;
      this.extension = !!options.extension;
      
      this.trigger('sync', this, options, defs);
      this.changed();
    }
  }

  public hasChanges(options: RelationOptions | Relation): boolean
  {
    return !DataTypes.equals(options instanceof Relation ? options.encode() : options, this.encode());
  }

  public changed()
  {
    this.updated = now();

    this.trigger('changed', this);
  }

  private decodeTypePair([prop, propType]: [string, any]): EntityPropPair
  {
    return [prop, this.defs.getType(propType)];
  }

  private encodeTypePair(pair?: [string, Type]): [string, any] | undefined
  {
    return pair
      ? [pair[0], pair[1].encode()]
      : undefined;
  }

  public encode(): RelationOptions
  {
    const { 
      name, created, updated,
      kind, subject, subjectRelationName, 
      morphs, morphsToRelated, 
      related, relatedRelationName, 
      multiple, required, owns, extension 
    } = this;

    return {
      name,
      updated,
      created,
      kind,
      subject,
      subjectRelationName,
      morphs: this.encodeTypePair(morphs),
      morphsToRelated: Array.from(morphsToRelated.entries()),
      related,
      relatedRelationName,
      multiple, required, owns, extension,
    };
  }

  private getRelatedWithName(name: string, related: RelationTypeKey[]): RelationTypeKey | undefined
  {
    return related.find((r) => r.name === name);
  }

  public rename(name: string, newName: string)
  {
    this.renameReference(name, newName, [this.subject]);
    this.renameReference(name, newName, this.related);

    this.changed();
  }

  private renameReference(name: string, newName: string, related: RelationTypeKey[])
  {
    const withName = this.getRelatedWithName(name, related);

    if (withName)
    {
      withName.name = newName;
    }
  }

  public remove(name: string)
  {
    this.removeReference(name, [this.subject]);
    this.removeReference(name, this.related);

    this.changed();
  }

  private removeReference(name: string, related: RelationTypeKey[])
  {
    const i = related.findIndex((r) => r.name === name);

    if (i !== -1)
    {
      related.splice(i, 1);
      related[i].props = [];
    }
  }

  public renameProp(name: string, prop: string, newProp: string)
  {
    this.renamePropReference(name, prop, newProp, [this.subject]);
    this.renamePropReference(name, prop, newProp, this.related);

    this.changed();
  }

  private renamePropReference(name: string, prop: string, newProp: string, related: RelationTypeKey[])
  {
    const withName = this.getRelatedWithName(name, related);

    if (withName)
    {
      const i = withName.props.indexOf(prop);

      if (i !== -1)
      {
        withName.props[i] = newProp;
      }
    }
  }

  public removeProp(name: string, prop: string)
  {
    this.removePropReference(name, prop, [this.subject]);
    this.removePropReference(name, prop, this.related);

    this.changed();
  }

  private removePropReference(name: string, prop: string, related: RelationTypeKey[])
  {
    const i = related.findIndex((r) => r.name === name);

    if (i !== -1)
    {
      const withName = related[i];
      const k = withName.props.indexOf(prop);

      if (k !== -1)
      {
        withName.props.splice(k, 1);

        if (withName.props.length === 0)
        {
          related.splice(i, 1);

          return true;
        }
      }
    }

    return false;
  }

  public getPropTypes(related: RelationTypeKey[]): Type[]
  {
    const types: Type[] = [];

    related.forEach(({ name, props }) => 
    {
      const entity = this.defs.getEntity(name);

      if (!entity)
      {
        return;
      }

      const primary = entity.getEntityProps();

      props.forEach((_, i) =>
      {
        const propType = primary.props[i][1];

        types[i] = types[i]
          ? Types.merge(types[i], propType)
          : propType.clone();
      });
    });

    return types;
  }

  public isEmpty()
  {
    return this.subject.props.length === 0
        || this.related.length === 0;
  }

  private getItemType(related: RelationTypeKey[]): Type
  {
    const typesResolved = related.map((r) => this.defs.getType(r.name));
    const itemType = typesResolved.length > 1
      ? Types.many(typesResolved)
      : typesResolved[0];

    return itemType;
  }

  public getSubjectRelation(subjectName: string): EntityRelation | undefined
  {
    if (this.subject.name !== subjectName)
    {
      return undefined;
    }

    const name = this.subjectRelationName;
    const local = this.subject.props;
    const related = this.related;
    const itemType = this.getItemType(related);
    const cascade = this.owns && this.multiple
      ? RelationCascade.CASCADE
      : this.required
        ? RelationCascade.RESTRICT
        : RelationCascade.SET_NULL;
    const relationType = this.required
      ? itemType
      : Types.optional(itemType);
    const kind = this.kind === RelationKind.HAS_MANY
      ? RelationKind.BELONGS_TO
      : this.kind; 

    const relation: EntityRelation = {
      relation: this,
      name,
      kind,
      local,
      cascade,
      related,
      itemType,
      relationType,
    };

    if (this.morphs) {
      relation.morphs = this.morphs;
      relation.morphsToRelated = this.morphsToRelated;
      relation.relatedToMorphs = this.relatedToMorphs;
    }

    return relation;
  }

  public getRelatedRelation(relatedName: string): EntityRelation | undefined
  {
    const withName = this.getRelatedWithName(relatedName, this.related);

    if (!withName)
    {
      return undefined;
    }

    const name = this.relatedRelationName;
    const local = withName.props;
    const related = [this.subject];
    const itemType = this.getItemType(related);
    const cascade = RelationCascade.NONE;
    const relationType = this.multiple
      ? Types.list(itemType)
      : this.required
        ? itemType
        : Types.optional(itemType);
    const kind = this.kind === RelationKind.HAS_MANY
      ? RelationKind.HAS_MANY
      : this.morphs
        ? RelationKind.ONE_POLYMORPHIC
        : RelationKind.ONE;

    const relation: EntityRelation = {
      relation: this,
      name,
      kind,
      local,
      cascade,
      related,
      itemType,
      relationType,
    };

    if (this.morphs) {
      relation.where = [
        this.morphs[0],
        this.relatedToMorphs.get(relatedName)
      ];
    }

    return relation;
  }

  public getTypeProps(name: string): EntityProps[]
  {
    const typeProps: EntityProps[] = [];

    if (this.subject.name === name)
    {
      const propTypesList = this.getPropTypes(this.related);
      const props: EntityPropPair[] = this.subject.props.map((prop, i) => [prop, propTypesList[i]]);

      typeProps.push({
        type: EntityKeyType.FOREIGN,
        props,
        relation: this,
      });

      if (this.morphs)
      {
        typeProps.push({
          type: EntityKeyType.NONE,
          props: [this.morphs],
          relation: this,
        });
      }
    }

    return typeProps;
  }

  // one{id} has many many{one_id}
  public static hasMany(defs: Definitions, options: {
    name?: string,
    one: string, 
    many: string, 
    oneRelationName?: string, 
    manyRelationName?: string,
    foreignKeyPrefix?: string,
    owns?: boolean,
    created?: number,
    updated?: number,
  }): Relation
  {
    const one = defs.getEntity(options.one);

    if (!one) {
      throw new Error(`Entity ${options.one} does not exist.`);
    }

    const relatedRelationName = options.oneRelationName || options.many;
    const subjectRelationName = options.manyRelationName || options.one;
    const foreignKeyPrefix = options.foreignKeyPrefix || (subjectRelationName + '_');
    const name = options.name || (subjectRelationName + '_hasMany_' + relatedRelationName);
    const relatedProps = one.getPrimary().props;
    const subjectProps = relatedProps.map((p) => foreignKeyPrefix + p);

    return new Relation(defs, {
      name,
      created: options.created || now(),
      updated: options.updated || now(),
      kind: RelationKind.HAS_MANY,
      subject: { 
        name: options.many,
        props: subjectProps,
      },
      subjectRelationName,
      related: [{
        name: options.one,
        props: relatedProps
      }],
      relatedRelationName,
      multiple: true,
      owns: options.owns !== false, // tslint:disable-line: no-boolean-literal-compare
      required: options.owns !== false, // tslint:disable-line: no-boolean-literal-compare
    });
  }

  // oneOfMany{belongsTo_id} belongs to belongsTo{id}
  public static belongsTo(defs: Definitions, options: {
    name?: string,
    oneOfMany: string,
    belongsTo: string, 
    oneOfManyRelationName?: string,
    belongsToRelationName?: string, 
    foreignKeyPrefix?: string, 
    owns?: boolean,
    created?: number,
    updated?: number,
  }): Relation 
  {
    return this.hasMany(defs, {
      name: options.name,
      one: options.belongsTo,
      many: options.oneOfMany,
      oneRelationName: options.belongsToRelationName,
      manyRelationName: options.oneOfManyRelationName,
      foreignKeyPrefix: options.foreignKeyPrefix,
      owns: options.owns,
    });
  }

  // hasOne{one_id} has one one{id}
  public static hasOne(defs: Definitions, options: {
    name?: string,
    hasOne: string,
    one: string,
    required?: boolean,
    owns?: boolean,
    hasOneRelationName?: string,
    oneRelationName?: string,
    foreignKeyPrefix?: string,
    created?: number,
    updated?: number,
  }): Relation
  {
    const one = defs.getEntity(options.one);

    if (!one) {
      throw new Error(`Entity ${options.one} does not exist.`);
    }

    const relatedRelationName = options.oneRelationName || options.hasOne;
    const subjectRelationName = options.hasOneRelationName || options.one;
    const foreignKeyPrefix = options.foreignKeyPrefix || (subjectRelationName + '_');
    const name = options.name || (subjectRelationName + '_hasOne_' + relatedRelationName);
    const relatedProps = one.getPrimary().props;
    const subjectProps = relatedProps.map((p) => foreignKeyPrefix + p);

    return new Relation(defs, {
      name,
      created: options.created || now(),
      updated: options.updated || now(),
      kind: RelationKind.HAS_ONE,
      subject: {
        name: options.hasOne,
        props: subjectProps,
      },
      subjectRelationName,
      related: [{
        name: options.one,
        props: relatedProps,
      }],
      relatedRelationName,
      required: options.required,
      owns: options.owns,
    });
  }

  // one{id} belongs to belongsTo{one_id}
  public static belongsToOne(defs: Definitions, options: {
    name?: string,
    one: string,
    belongsTo: string,
    required?: boolean,
    owns?: boolean,
    oneRelationName?: string,
    belongsToRelationName?: string,
    foreignKeyPrefix?: string,
    created?: number,
    updated?: number,
  }): Relation
  {
    return this.hasOne(defs, {
      name: options.name,
      hasOne: options.belongsTo,
      one: options.one,
      required: options.required,
      owns: options.owns,
      hasOneRelationName: options.belongsToRelationName,
      oneRelationName: options.oneRelationName,
      foreignKeyPrefix: options.foreignKeyPrefix,
    })
  }

  // hasOne{poly_id, poly_type?} has one a{a_id}, b{b_id}
  public static hasOnePolymorphic(defs: Definitions, options: {
    name?: string,
    hasOne: string,
    morphs: [string, any],
    morphsToRelated: MapInput<any, string>,
    poly: string[],
    required?: boolean,
    owns?: boolean,
    hasOneRelationName: string,
    polyRelationName?: string,
    foreignKeyPrefix?: string,
    created?: number,
    updated?: number,
  }): Relation
  {
    const subjectRelationName = options.hasOneRelationName;
    const relatedRelationName = options.polyRelationName || options.hasOne;
    const name = options.name || (subjectRelationName + '_hasOnePolymorphic_' + relatedRelationName);
    const foreignKeyPrefix = options.foreignKeyPrefix || (subjectRelationName + '_');
    const related = options.poly.map((polyName) => {
      const poly = defs.getEntity(polyName);

      if (!poly) {
        throw new Error(`Entity ${polyName} does not exist.`);
      }

      return {
        name: polyName, 
        props: poly.getPrimary().props
      };
    });
    const subjectProps = related[0].props.map((p) => foreignKeyPrefix + p);

    return new Relation(defs, {
      name,
      created: options.created || now(),
      updated: options.updated || now(),
      kind: RelationKind.HAS_ONE_POLYMORPHIC,
      subject: {
        name: options.hasOne,
        props: subjectProps,
      },
      subjectRelationName,
      related,
      relatedRelationName,
      morphs: options.morphs,
      morphsToRelated: options.morphsToRelated,
      required: options.required,
      owns: options.owns,
    });
  }

}