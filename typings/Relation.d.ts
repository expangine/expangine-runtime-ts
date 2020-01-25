import { Type, TypePropPair, TypeProps } from './Type';
import { Definitions } from './Definitions';
import { MapInput } from './fns';
export interface RelationTypeKey {
    name: string;
    props: string[];
}
export interface RelationOptions {
    name: string;
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
export interface TypeRelation {
    relationName: string;
    name: string;
    related: RelationTypeKey[];
    morphs?: TypePropPair;
    morphsToRelated?: Map<any, string>;
    relatedToMorphs?: Map<string, any>;
    where?: [string, any];
    itemType: Type;
    relationType: Type;
    cascade: RelationCascade;
    local: string[];
}
export declare enum RelationCascade {
    NONE = 0,
    CASCADE = 1,
    SET_NULL = 2,
    RESTRICT = 3
}
export declare class Relation {
    /**
     * A unique name for the relationship between the subject type and related types.
     */
    name: string;
    /**
     * A name-props pair for the type that has the foreign key. The name is the
     * aliased type name and the props are the properties on it that reference
     * the related type or types.
     */
    subject: RelationTypeKey;
    /**
     * The name the subject uses to refer to the related types.
     */
    subjectRelationName: string;
    /**
     * A name-type pair for a property that exists on the subject type that is
     * used to determine which related type.
     */
    morphs: TypePropPair | null;
    /**
     * A map of values from the morphs property to the related type names.
     */
    morphsToRelated: Map<any, string>;
    /**
     * The list of name-prop pairs that the subject type can be related to based
     * on the morph
     */
    related: RelationTypeKey[];
    /**
     * The name the related types use to refer to the subject.
     */
    relatedRelationName: string;
    /**
     * A map from related type names to the morph value.
     */
    relatedToMorphs: Map<string, any>;
    /**
     * List or single related instance?
     */
    multiple: boolean;
    /**
     * Remove subject if related is removed
     */
    required: boolean;
    /**
     * When related is being removed, stop it. I own it. But when subject is
     * removed then remove the related.
     */
    owns: boolean;
    /**
     * Related types extend the subject, the subject has a morph value to know
     * which type it is.
     */
    extension: boolean;
    /**
     * Needed for retrieving aliased types and their current properties.
     */
    protected defs: Definitions;
    constructor(defs: Definitions, options: RelationOptions);
    private decodeTypePair;
    private encodeTypePair;
    encode(): RelationOptions;
    private getRelatedWithName;
    rename(name: string, newName: string): void;
    private renameReference;
    remove(name: string): void;
    private removeReference;
    renameProp(name: string, prop: string, newProp: string): void;
    private renamePropReference;
    removeProp(name: string, prop: string): void;
    private removePropReference;
    getPropTypes(related: RelationTypeKey[]): Type[];
    isEmpty(): boolean;
    private getItemType;
    getSubjectRelation(subjectName: string): TypeRelation | null;
    getRelatedRelation(relatedName: string): TypeRelation | null;
    getTypeProps(name: string): TypeProps[];
    static hasMany(defs: Definitions, options: {
        name?: string;
        one: string;
        many: string;
        oneRelationName?: string;
        manyRelationName?: string;
        foreignKeyPrefix?: string;
        owns?: boolean;
    }): Relation;
    static belongsTo(defs: Definitions, options: {
        name?: string;
        oneOfMany: string;
        belongsTo: string;
        oneOfManyRelationName?: string;
        belongsToRelationName?: string;
        foreignKeyPrefix?: string;
        owns?: boolean;
    }): Relation;
    static hasOne(defs: Definitions, options: {
        name?: string;
        hasOne: string;
        one: string;
        required?: boolean;
        owns?: boolean;
        hasOneRelationName?: string;
        oneRelationName?: string;
        foreignKeyPrefix?: string;
    }): Relation;
    static belongsToOne(defs: Definitions, options: {
        name?: string;
        one: string;
        belongsTo: string;
        required?: boolean;
        owns?: boolean;
        oneRelationName?: string;
        belongsToRelationName?: string;
        foreignKeyPrefix?: string;
    }): Relation;
    static hasOnePolymorphic(defs: Definitions, options: {
        name?: string;
        hasOne: string;
        morphs: [string, any];
        morphsToRelated: MapInput<any, string>;
        poly: string[];
        required?: boolean;
        owns?: boolean;
        hasOneRelationName: string;
        polyRelationName?: string;
        foreignKeyPrefix?: string;
    }): Relation;
}