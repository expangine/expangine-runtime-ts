
import { Expression, ExpressionProvider, ExpressionValue } from '../Expression';
import { objectMap, isString, toExpr } from '../fns';
import { AnyType } from '../types/Any';
import { Definitions } from '../Definitions';


const INDEX_DEFINE = 1;
const INDEX_BODY = 2;

export class DefineExpression extends Expression 
{

  public static id = 'def';

  public static decode(data: any[], exprs: ExpressionProvider): DefineExpression 
  {
    const define = objectMap(data[INDEX_DEFINE], (d: any) => exprs.getExpression(d));
    const body = exprs.getExpression(data[INDEX_BODY]);
    
    return new DefineExpression(define, body);
  }

  public static encode(expr: DefineExpression): any 
  {
    const define = objectMap(expr.define, e => e.encode());

    return [this.id, define, expr.body.encode()];
  }

  public define: Record<string, Expression>;
  public body: Expression;

  public constructor(define: Record<string, Expression>, body: Expression) 
  {
    super();
    this.define = define;
    this.body = body;
  }

  public getId(): string
  {
    return DefineExpression.id;
  }

  public getComplexity(def: Definitions): number
  {
    let complexity = this.body.getComplexity(def);

    for (const prop in this.define)
    {
      complexity = Math.max(complexity, this.define[prop].getComplexity(def));
    }

    return complexity;
  }

  public getScope()
  {
    return objectMap(this.define, () => AnyType.baseType);
  }

  public encode(): any 
  {
    return DefineExpression.encode(this);
  }

  public with(name: string, value: ExpressionValue): DefineExpression
  public with(defines: Record<string, ExpressionValue>): DefineExpression
  public with(nameOrDefines: string | Record<string, ExpressionValue>, value?: Expression): DefineExpression
  {
    const append = isString(nameOrDefines)
      ? { [nameOrDefines]: value }
      : nameOrDefines;

    return new DefineExpression({
      ...this.define,
      ...toExpr(append),
    }, this.body);
  }

  public run(expr: Expression): DefineExpression
  {
    return new DefineExpression({ ...this.define }, expr);
  }

}