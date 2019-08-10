
import { Expression, ExpressionProvider } from '../Expression';
import { Definitions } from '../Definitions';


const INDEX_PATH = 1;

export class GetExpression extends Expression 
{

  public static id = 'get';

  public static decode(data: any[], exprs: ExpressionProvider): GetExpression 
  {
    const path: Expression[] = data[INDEX_PATH].map((part: any) => exprs.getExpression(part));

    return new GetExpression(path);
  }

  public static encode(expr: GetExpression): any 
  {
    const path = expr.path.map(e => e.encode());

    return [this.id, path];
  }

  public path: Expression[];

  public constructor(path: Expression[]) 
  {
    super(GetExpression.id);
    this.path = path;
  }

  public getComplexity(def: Definitions): number
  {
    return this.path.reduce((max, e) => Math.max(max, e.getComplexity(def)), 0);
  }

  public getScope(): null
  {
    return null;
  }

  public encode(): any 
  {
    return GetExpression.encode(this);
  }

}