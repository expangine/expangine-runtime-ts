
import { Expression, ExpressionProvider } from '../Expression';
import { Definitions } from '../Definitions';


const INDEX_PATH = 1;
const INDEX_VALUE = 2;

export class SetExpression extends Expression 
{

  public static id = 'set';

  public static decode(data: any[], exprs: ExpressionProvider): SetExpression 
  {
    const path: Expression[] = data[INDEX_PATH].map((part: any) => exprs.getExpression(part));
    const value = exprs.getExpression(data[INDEX_VALUE]);

    return new SetExpression(path, value);
  }

  public static encode(expr: SetExpression): any 
  {
    const path = expr.path.map(e => e.encode());

    return [this.id, path, expr.value.encode()];
  }

  public path: Expression[];
  public value: Expression;

  public constructor(path: Expression[], value: Expression) 
  {
    super(SetExpression.id);
    this.path = path;
    this.value = value;
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
    return SetExpression.encode(this);
  }

}