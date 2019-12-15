
import { Expression, ExpressionProvider, ExpressionValue } from '../Expression';
import { Definitions } from '../Definitions';
import { toExpr, isArray } from '../fns';
import { Type } from '../Type';
import { Traverser } from '../Traverser';
import { ValidationHandler } from '../Validate';


const INDEX_VALUE = 1;
const INDEX_PATH = 2;

export class SubExpression extends Expression 
{

  public static id = 'sub';

  public static decode(data: any[], exprs: ExpressionProvider): SubExpression 
  {
    const value: Expression = exprs.getExpression(data[INDEX_VALUE]);
    const path: Expression[] = data[INDEX_PATH].map((part: any) => exprs.getExpression(part));

    return new SubExpression(value, path);
  }

  public static encode(expr: SubExpression): any 
  {
    const value = expr.value.encode();
    const path = expr.path.map(e => e.encode());

    return [this.id, value, path];
  }

  public static create(value: ExpressionValue, path: ExpressionValue[])
  {
    return new SubExpression(toExpr(value), toExpr(path));
  }

  public value: Expression;
  public path: Expression[];

  public constructor(value: Expression, path: Expression[]) 
  {
    super();
    this.value = value;
    this.path = path;
  }

  public getId(): string
  {
    return SubExpression.id;
  }

  public getComplexity(def: Definitions): number
  {
    return this.path.reduce((max, e) => Math.max(max, e.getComplexity(def)), this.value.getComplexity(def));
  }

  public getScope(): null
  {
    return null;
  }

  public encode(): any 
  {
    return SubExpression.encode(this);
  }

  public getType(def: Definitions, context: Type): Type | null
  {
    const valueType = this.value.getType(def, context);

    return valueType
      ? def.getPathType(this.path, valueType)
      : null;
  }

  public traverse<R>(traverse: Traverser<Expression, R>): R
  {
    return traverse.enter(this, () => {
      traverse.step('value', this.value);
      traverse.step('path', () => {
        this.path.forEach((expr, index) => 
          traverse.step(index, expr)
        )
      });
    });
  }

  public setParent(parent: Expression = null): void
  {
    this.parent = parent;

    this.value.setParent(this);
    this.path.forEach(e => e.setParent(this));
  }

  public validate(def: Definitions, context: Type, handler: ValidationHandler): void
  {
    const type = this.value.getType(def, context);

    this.validatePath(def, context, type, this.path, handler);

    this.value.validate(def, context, handler);
  }

  public with(expr: ExpressionValue): SubExpression
  {
    return new SubExpression(toExpr(expr), this.path.slice());
  }

  public sub(expr: ExpressionValue | ExpressionValue[]): SubExpression
  {
    const append = isArray(expr)
      ? expr
      : [expr];

    return new SubExpression(this.value, this.path.concat(toExpr(append)));
  }

}