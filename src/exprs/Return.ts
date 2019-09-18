
import { Expression, ExpressionProvider } from '../Expression';
import { Definitions } from '../Definitions';


const INDEX_VALUE = 1;

export class ReturnExpression extends Expression 
{

  public static id = 'return';

  public static decode(data: any[], exprs: ExpressionProvider): ReturnExpression 
  {
    const value = exprs.getExpression(data[INDEX_VALUE]);
    
    return new ReturnExpression(value);
  }

  public static encode(expr: ReturnExpression): any 
  {
    const returnValue = expr.value.encode();

    return returnValue !== undefined
      ? [this.id, returnValue]
      : [this.id];
  }

  public value: Expression;

  public constructor(value: Expression) 
  {
    super();
    this.value = value;
  }

  public getId(): string
  {
    return ReturnExpression.id;
  }

  public getComplexity(def: Definitions): number
  {
    return this.value.getComplexity(def);
  }

  public getScope(): null
  {
    return null;
  }

  public encode(): any 
  {
    return ReturnExpression.encode(this);
  }

}