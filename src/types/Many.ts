
import { Type, TypeProvider, TypeDescribeProvider, TypeSub, TypeCompatibleOptions, TypeChild } from '../Type';
import { Operations, OperationGeneric } from '../Operation';
import { AnyType } from './Any';
import { Exprs } from '../Exprs';
import { Expression } from '../Expression';
import { AnyOps } from '../ops/AnyOps';
import { DefinitionProvider } from '../DefinitionProvider';
import { ID } from './ID';
import { isSameClass, isNumber } from '../fns';
import { Traverser, TraverseStep } from '../Traverser';
import { Computeds } from '../Computed';


const INDEX_MANY = 1;

export class ManyType<M = any> extends Type<M, Type[]>
{

  public static id = ID.Many;

  public static operations = new Operations(ID.Many + ID.Delimiter);

  public static computeds = new Computeds(ID.Many + ID.Delimiter);

  public static baseType = new ManyType([AnyType.baseType]);

  public static decode(data: any[], types: TypeProvider): ManyType 
  {
    const many = data[INDEX_MANY].map((d: any) => types.getType(d));

    return new ManyType(many);
  }

  public static encode(type: ManyType): any 
  {
    const many = type.options.map(t => t.encode());

    return [this.id, many];
  }

  public static describePriority: number = -1;
  
  public static describe(data: any, describer: TypeDescribeProvider, cache: Map<any, Type>): Type | undefined
  {
    return undefined;
  }

  public static registered: boolean = false;

  public static register(): void
  {

  }

  public operations?: Record<string, OperationGeneric>;

  public getOperations()
  {
    if (!this.operations)
    {
      const manyOps: Record<string, OperationGeneric> = {};

      this.options.forEach(many => 
      {
        const ops = many.getOperations();
        
        for (const prop in ops) 
        {
          manyOps[prop] = ops[prop];
        }
      });

      this.operations = manyOps;
    }

    return this.operations;
  }

  private forMany<T> (otherwise: T, handler: (type: Type) => T | undefined): T
  {
    const many = this.options;

    for (const type of many)
    {
      const result = handler(type);

      if (result !== undefined)
      {
        return result;
      } 
    }

    return otherwise;
  }

  public getId(): string
  {
    return ManyType.id;
  }

  public merge(type: ManyType): void
  {
    
  }

  public getSubType(expr: Expression, def: DefinitionProvider, context: Type): Type | undefined
  {
    for (const sub of this.options)
    {
      const subType = sub.getSubType(expr, def, context);

      if (subType)
      {
        return subType;
      }
    }

    return undefined;
  }

  public getSubTypes(def: DefinitionProvider): TypeSub[]
  {
    const subs: TypeSub[] = [];

    this.options.forEach(type => {
      type.getSubTypes(def).forEach(sub => {
        const matching = subs.find(existing => 
          existing.key === sub.key || (
            existing.key instanceof Type && 
            sub.key instanceof Type && 
            isSameClass(existing.key, sub.key)
          )
        );

        if (!matching) {
          subs.push(sub);
        }
      });
    });

    subs.sort((a, b) => {
      const ad = a.key instanceof Type ? 1 : 0;
      const bd = b.key instanceof Type ? 1 : 0;

      return ad - bd;
    });

    return subs;
  }

  public getChildType(name: TypeChild): Type | undefined
  {
    return this.options[name];
  }

  public getChildTypes(): TypeChild[]
  {
    return this.options.map((_, i) => i);
  }

  public getExactType(value: any): Type 
  {
    return this.forMany<Type>(this, many => (many.isValid(value) ? many : undefined));
  }

  public getSimplifiedType(): Type
  {
    return this.options.length === 1
      ? this.options[0]
      : this;
  }

  public getRequired(): Type
  {
    return this.isOptional()
      ? new ManyType(this.options.map((o) => o.getRequired()))
      : this;
  }

  protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean 
  {
    return this.forMany(false, many => many.isCompatible(other, options) ? true : undefined);
  }

  public isOptional(): boolean
  {
    return this.forMany(true, many => !many.isOptional() ? false : undefined);
  }

  public isSimple(): boolean
  {
    return this.forMany(true, many => !many.isSimple() ? false : undefined);
  }

  protected acceptsOtherTypes(): boolean
  {
    return true;
  }

  public traverse<R>(traverse: Traverser<Type, R>): R
  {
    return traverse.enter(this, () =>
      this.options.map((type, index) => traverse.step(index, type, (replaceWith) => this.options.splice(index, 1, replaceWith), () => this.options.splice(index, 1)))
    );
  }

  public getTypeFromStep(step: TraverseStep): Type | undefined
  {
    return this.options[step];
  }

  public setParent(parent?: Type): void
  {
    this.parent = parent;

    this.options.forEach(t => t.setParent(this));
  }

  public removeDescribedRestrictions(): void
  {
    this.options.forEach(t => t.removeDescribedRestrictions());
  }

  public getCreateExpression(): Expression
  {
    return this.options[0].getCreateExpression();
  }

  public getValidateExpression(): Expression
  {
    return Exprs.or(
      ...this.options.map((t) => t.getValidateExpression())
    );
  }

  public getCompareExpression(): Expression
  {
    return Exprs.op(AnyOps.cmp, {
      value: Exprs.get('value'), 
      test: Exprs.get('test'),
    });
  }

  public getValueChangeExpression(newValue: Expression, from?: TraverseStep, to?: TraverseStep): Expression
  {
    // from & to = sub type index
    if (isNumber(from) && !isNumber(to)) // removed
    {
      const targetType = from === 0 ? this.options[1] : this.options[0];
      const valueType = this.options[from];
      const casting = Exprs.cast(valueType, targetType);

      return Exprs
        .if(targetType.getValidateExpression())
        .than(Exprs.get('value'))
        .else(casting)
      ;
    }
    else if (!isNumber(from) && isNumber(to)) // added
    {
      return newValue;
    }
    else if (to === from && isNumber(from)) // change
    {
      return Exprs
        .if(Exprs.not(this.getValidateExpression()))
        .than(newValue)
        .else(Exprs.get('value'))
      ;
    }

    return newValue;
  }

  public isValid(value: any): value is M 
  {
    return this.forMany(false, many => many.isValid(value) ? true : undefined);
  }

  public normalize(value: any): any
  {
    return this.forMany(value, many => many.isValid(value) ? many.normalize(value) : undefined);
  }

  public newInstance(): ManyType
  {
    return new ManyType([]);
  }

  public clone(): ManyType
  {
    return new ManyType(this.options.map(e => e.clone()));
  }

  public encode(): any 
  {
    return ManyType.encode(this);
  }

  public create(): M
  {
    return this.options.length > 0
      ? this.options[0].create()
      : undefined;
  }

  public random(rnd: (a: number, b: number, whole: boolean) => number): M
  {
    const options = this.options;
    const chosen = rnd(0, options.length, true);

    return options[chosen].random(rnd);
  }

  public fromJson(json: any): any
  {
    const options = this.options;

    for (const many of options)
    {
      const parsed = many.normalize(json);

      if (parsed !== null && parsed !== undefined)
      {
        return parsed;
      }
    }

    return json;
  }

  public toJson(value: any): any
  {
    const options = this.options;

    for (const many of options)
    {
      if (many.isValid(value))
      {
        return many.toJson(value);
      }
    }

    return value;
  }

}
