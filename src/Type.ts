
import { isSameClass } from './fns';
import { Operations, OperationGeneric } from './Operation';
import { Expression } from './Expression';
import { DefinitionProvider } from './DefinitionProvider';
import { Traverser, Traversable, TraverseStep } from './Traverser';
import { Computeds } from './Computed';
import { ReferenceData } from './ReferenceData';



export type TypeInput = TypeClass | Type;

export type TypeInputFor<T> = TypeClass<Type<T>, T> | Type<T>;

export type TypeInputType<I> = I extends TypeClass & { baseType: { create(): infer D1 } }
  ? D1
  : I extends Type & { create(): infer D2 }
    ? D2
    : unknown;

export type TypeInputTypeArray<T extends TypeInput[]> = 
  { [K in keyof T]: TypeInputType<T[K]> }[keyof T];

export type TypeInputTypeElements<T extends any[]> = {
    [K in keyof T]: TypeInputType<T[K]>;
  };

export type TypeInputTypeObject<T extends TypeInputMap> = 
  UndefinedToOptional<{
    [K in keyof T]: TypeInputType<T[K]>;
  }>;

export type TypeInputMap = Record<string, TypeInput>;

export type UndefinedToOptional<T> = 
  [OptionalPropertyNames<T>] extends [never]
    ? T
    : [RequiredPropertyNames<T>] extends [never]
      ? Partial<T>
      : (Partial<Pick<T, OptionalPropertyNames<T>>> & Pick<T, RequiredPropertyNames<T>>);

export type OptionalPropertyNames<T> = {
  [K in keyof T]-?: undefined extends T[K] ? K : never
}[keyof T];

export type RequiredPropertyNames<T> = {
  [K in keyof T]-?: undefined extends T[K] ? never : K
}[keyof T];

export type TypeMap = Record<string, Type>;

export type TypeMapInput = Record<string, Type | undefined>;

export type TypeMapFor<T> = {
  [K in keyof T]: Type<T[K]>;
};

export type TypeChild = string | number;

export interface TypeSub 
{ 
  key: string | number | Type;
  value: Type;
}

export type TypeResolved<T> = T extends (null | undefined)
  ? undefined
  : T extends TypeInput
    ? Type
    : T extends TypeInput[]
      ? Type[]
      : T extends TypeInputMap
        ? Record<keyof T, Type>
        : {
          [K in keyof T]: TypeResolved<T[K]>
        };

export interface TypeProvider 
{
  getType(data: any, otherwise?: Type): Type;
  getExpression(data: any): Expression;
  isExpression(value: any): value is (Expression | [string, ...any[]]);
  getData(name: string): ReferenceData | undefined;
  setLegacy(): void;
}

export interface TypeDescribeProvider
{
  describe(data: any): Type;
  merge(type: Type, data: any): Type;
}

export interface TypeCompatibleOptions
{
  strict?: boolean;
  value?: boolean;
  exact?: boolean;
}

export interface TypeParser 
{
  (data: any, types: TypeProvider): Type;
}

export interface TypeClass<T extends Type<D, O> = any, D = any, O = any>
{
  id: string;
  operations: Operations;
  computeds: Computeds;
  baseType: T;
  decode(this: TypeClass<T>, data: any[], types: TypeProvider): T;
  encode(this: TypeClass<T>, type: T): any;
  describePriority: number;
  describe(this: TypeClass<T>, data: any, describer: TypeDescribeProvider, cache: Map<any, Type>): Type<D, O> | undefined;
  register(this: TypeClass<T>): void;
  registered: boolean;
  new(options: O, ...args: any[]): T;
}

export abstract class Type<D = any, O = any> implements Traversable<Type>
{

  public options: O;
  public parent?: Type = undefined;

  public constructor(options: O) 
  {
    this.options = options;
  }

  public abstract getOperations(): Record<string, OperationGeneric>;

  public abstract getId(): string;

  public abstract merge(type: this): void;

  public abstract getSubType(expr: Expression, def: DefinitionProvider, context: Type): Type | undefined;

  public abstract getSubTypes(def: DefinitionProvider): TypeSub[];

  public getChildType(name: TypeChild): Type | undefined
  {
    return undefined;
  }

  public getChildTypes(): TypeChild[]
  {
    return [];
  }

  public getParentOfType<T extends Type, R = any>(type: TypeClass<T, R>): T | undefined
  {
    let parent: Type | undefined = this.parent;

    while (parent)
    {
      if (parent.constructor === type)
      {
        return parent as T;
      }

      parent = parent.parent;
    }

    return undefined;
  }

  public abstract getExactType(value: D): Type;

  public abstract getSimplifiedType(): Type;

  public getRequired(): Type
  {
    return this;
  }

  public isWrapper(): boolean
  {
    return false;
  }

  public getWrappedType(): Type
  {
    return this;
  }

  protected abstract isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean;

  public isCompatible(other: Type, options: TypeCompatibleOptions = {}): boolean
  {
    if (other === this)
    {
      return true;
    }

    if (!options.exact && other.isWrapper() && this.isCompatible(other.getWrappedType(), options))
    {
      return true;
    }

    if (options.strict && !isSameClass(this, other) && !this.acceptsOtherTypes())
    {
      return false;
    }

    return this.isDeepCompatible(other, options);
  }

  protected acceptsOtherTypes(): boolean
  {
    return false;
  }

  public acceptsType(other: Type): boolean
  {
    return this.isCompatible(other, { strict: true });
  }

  public acceptsData(other: Type): boolean
  {
    return this.isCompatible(other, { strict: true, value: true });
  }

  public exactType(other: Type): boolean
  {
    return this.isCompatible(other, { exact: true, strict: true });
  }

  public exactData(other: Type): boolean
  {
    return this.isCompatible(other, { exact: true, strict: true, value: true });
  }

  public abstract isOptional(): boolean;

  public abstract isSimple(): boolean;

  public abstract traverse<R>(traverse: Traverser<Type, R>): R;

  public abstract setParent(parent?: Type): void;

  public abstract removeDescribedRestrictions(): void;

  public abstract getCreateExpression(): Expression;

  public abstract getValidateExpression(): Expression;

  public abstract getCompareExpression(): Expression;

  public getValueChangeExpression(newValue: Expression, from?: TraverseStep, to?: TraverseStep): Expression
  {
    return newValue;
  }

  public getValueChangeAt(newValue: Expression): Expression
  {
    let node: Type | undefined = this.parent;
    const path = this.getPath();

    while(node)
    {
      const step = path.pop();

      newValue = node.getValueChangeExpression(newValue, step, step);
      node = node.parent;
    }

    return newValue;
  }

  public getPath(): TraverseStep[]
  {
    return this.getRootType().traverse(new Traverser((type, _, path, traverser) =>
    {
      if (type === this)
      {
        traverser.stop(path.slice());
      }
    }, [] as TraverseStep[]));
  }

  public getTypeFromPath(path: TraverseStep[]): Type | undefined
  {
    if (path.length === 0)
    {
      return this;
    }
    
    const type = this.getTypeFromStep(path[0]);

    if (!type)
    {
      return undefined;
    }

    return type.getTypeFromPath(path.slice(1));
  }

  public getTypeFromStep(step: TraverseStep): Type | undefined
  {
    return undefined;
  }

  public getRootType(): Type
  {
    let node: Type = this;

    while (node.parent)
    {
      node = node.parent;
    }

    return node;
  }

  public abstract isValid(value: any): value is D;

  public abstract normalize(value: any): any;

  public abstract newInstance(): Type<D>;

  public abstract clone(): Type<D>;

  public abstract encode(): any;

  public abstract create(): D;

  public abstract random(rnd: (a: number, b: number, whole: boolean) => number): D;

  public abstract fromJson(json: any): D;

  public abstract toJson(value: D): any;
  
}