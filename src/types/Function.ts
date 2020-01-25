
import { isFunction } from '../fns';
import { Type, TypeProvider, TypeDescribeProvider, TypeSub, TypeCompatibleOptions } from '../Type';
import { Operations } from '../Operation';
import { ObjectType, ObjectOptions } from './Object';
import { AnyType } from './Any';
import { Expression } from '../Expression';
import { Definitions } from '../Definitions';
import { ID } from './ID';
import { Traverser } from '../Traverser';
import { Computeds } from '../Computed';


const INDEX_RETURN = 1;
const INDEX_PARAMS = 2;
const INDEX_EXPRESSION = 3;

export interface FunctionOptions 
{
  returnType: Type;
  params: ObjectType<ObjectOptions>;
  expression: Expression;
}

export class FunctionType extends Type<FunctionOptions> 
{

  public static id = ID.Function;

  public static operations = new Operations(ID.Function + ID.Delimiter);

  public static computeds = new Computeds(ID.Function + ID.Delimiter);

  public static baseType = new FunctionType({ returnType: AnyType.baseType, params: ObjectType.baseType, expression: null });

  public static decode(data: any[], types: TypeProvider): FunctionType
  {
    const returnType = types.getType(data[INDEX_RETURN]);
    const params = types.getType(data[INDEX_PARAMS]) as ObjectType;
    const expression = types.getExpression(data[INDEX_EXPRESSION]);

    return new FunctionType({ returnType, params, expression });
  }

  public static encode(type: FunctionType): any 
  {
    const { returnType, params, expression } = type.options;
    
    return [
      this.id,
      returnType.encode(),
      params.encode(),
      expression.encode()
    ];
  }

  public static describePriority: number = -1;
  
  public static describe(data: any, describer: TypeDescribeProvider): Type | null
  {
    return null;
  }

  public static registered: boolean = false;

  public static register(): void
  {

  }
  
  public getId(): string
  {
    return FunctionType.id;
  }

  public getOperations()
  {
    return FunctionType.operations.map;
  }

  public merge(type: FunctionType, describer: TypeDescribeProvider): void
  {
    
  }

  public getSubType(expr: Expression, def: Definitions, context: Type): Type | null
  {
    return null;
  }

  public getSubTypes(def: Definitions): TypeSub[]
  {
    return [];
  }

  public getExactType(value: any): Type 
  {
    return this;
  }

  public getSimplifiedType(): Type
  {
    return this.options.returnType;
  }

  protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean 
  {
    return other instanceof FunctionType
      && this.options.returnType.isCompatible(other.options.returnType, options)
      && this.options.params.isCompatible(other.options.params, options);
  }

  public isOptional(): boolean
  {
    return this.options.returnType.isOptional();
  }

  public isSimple(): boolean
  {
    return false;
  }

  public traverse<R>(traverse: Traverser<Type, R>): R
  {
    return traverse.enter(this, () => {
      traverse.step('returnType', this.options.returnType);
      traverse.step('params', this.options.params);
    });
  }

  public setParent(parent: Type = null): void
  {
    this.parent = parent;

    this.options.returnType.setParent(this);
    this.options.params.setParent(this);
  }

  public removeDescribedRestrictions(): void
  {
    
  }

  public getCreateExpression(): Expression
  {
    return this.options.returnType.getCreateExpression();
  }

  public getValidateExpression(): Expression
  {
    return this.options.returnType.getValidateExpression();
  }

  public getCompareExpression(): Expression
  {
    return this.options.returnType.getCompareExpression();
  }

  public isValid(value: any): boolean 
  {
    return isFunction(value);
  }

  public normalize(value: any): any
  {
    return value;
  }

  public newInstance(): FunctionType
  {
    const { returnType, params, expression } = this.options;

    return new FunctionType({
      returnType: returnType.newInstance(),
      params: params.newInstance(),
      expression, // TODO copy expression
    });
  }

  public clone(): FunctionType
  {
    const { returnType, params, expression } = this.options;

    return new FunctionType({
      returnType: returnType.clone(),
      params: params.clone(),
      expression, // TODO copy expression
    });
  }

  public encode(): any 
  {
    return FunctionType.encode(this);
  }

  public create(): any
  {
    return () => { /**/ };
  }

  public random(rnd: (a: number, b: number, whole: boolean) => number): any
  {
    return () => this.options.returnType.random(rnd);
  }

  public fromJson(json: any): any
  {
    // tslint:disable-next-line: prefer-const
    let fn = null;

    // tslint:disable-next-line: no-eval
    eval('fn = ' + json);

    return fn;
  }

  public toJson(value: any): any
  {
    return value.toString();
  }

}