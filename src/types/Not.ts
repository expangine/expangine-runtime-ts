
import { Type, TypeProvider, TypeDescribeProvider, TypeSub, TypeCompatibleOptions, TypeChild } from '../Type';
import { Operations } from '../Operation';
import { AnyType } from './Any';
import { Expression } from '../Expression';
import { DefinitionProvider } from '../DefinitionProvider';
import { ID } from './ID';
import { Traverser, TraverseStep } from '../Traverser';
import { NoExpression } from '../exprs/No';
import { Computeds } from '../Computed';


const INDEX_NOT = 1;

export class NotType extends Type<any, Type[]>
{

  public static id = ID.Not;

  public static operations = new Operations(ID.Not + ID.Delimiter);

  public static computeds = new Computeds(ID.Not + ID.Delimiter);

  public static baseType = new NotType([AnyType.baseType]);

  public static decode(data: any[], types: TypeProvider): NotType 
  {
    const not = data[INDEX_NOT].map((d: any) => types.getType(d));

    return new NotType(not);
  }

  public static encode(type: NotType): any 
  {
    const not = type.options.map(t => t.encode());

    return [this.id, not];
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

  public getOperations()
  { 
    return {};
  }

  private forNot<T> (otherwise: T, handler: (type: Type) => T | undefined): T
  {
    const not = this.options;

    for (const type of not)
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
    return NotType.id;
  }

  public merge(type: NotType): void
  {
    
  }

  public getSubType(expr: Expression, def: DefinitionProvider, context: Type): Type | undefined
  {
    return undefined;
  }

  public getSubTypes(def: DefinitionProvider): TypeSub[]
  {
    return [];
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
    return this;
  }

  public getSimplifiedType(): Type
  {
    return this;
  }

  protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean 
  {
    return this.forNot(true, not => not.isCompatible(other, options) ? false : undefined);
  }

  protected acceptsOtherTypes(): boolean
  {
    return true;
  }

  public isOptional(): boolean
  {
    return true;
  }

  public isSimple(): boolean
  {
    return false;
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
    return NoExpression.instance;
  }

  public getValidateExpression(): Expression
  {
    return NoExpression.instance;
  }

  public getCompareExpression(): Expression
  {
    return NoExpression.instance;
  }

  public isValid(value: any): value is any 
  {
    return this.forNot(true, many => many.isValid(value) ? false : undefined);
  }

  public normalize(value: any): any
  {
    return this.forNot(value, many => many.isValid(value) ? null : undefined);
  }

  public newInstance(): NotType
  {
    return new NotType([]);
  }

  public clone(): NotType
  {
    return new NotType(this.options.map(e => e.clone()));
  }

  public encode(): any 
  {
    return NotType.encode(this);
  }

  public create(): any
  {
    return null;
  }

  public random(rnd: (a: number, b: number, whole: boolean) => number): any
  {
    return null;
  }

  public fromJson(json: any): any
  {
    return AnyType.baseType.fromJson(json);
  }

  public toJson(value: any): any
  {
    return AnyType.baseType.toJson(value);
  }

}
