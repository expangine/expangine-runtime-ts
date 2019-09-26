
import { Expression, ExpressionProvider } from '../Expression';
import { BooleanType } from '../types/Boolean';
import { Definitions } from '../Definitions';
import { Type } from '../Type';
import { Traverser } from '../Traverser';


const DEFAULT_MAX_ITERATIONS = 100000;
const DEFAULT_BREAK = 'break';
const INDEX_CONDITION = 1;
const INDEX_BODY = 2;
const INDEX_BREAK = 3;
const INDEX_MAX = 4;

export class DoExpression extends Expression 
{

  public static MAX_ITERATIONS = DEFAULT_MAX_ITERATIONS;

  public static id = 'do';

  public static decode(data: any[], exprs: ExpressionProvider): DoExpression 
  {
    const condition = exprs.getExpression(data[INDEX_CONDITION]);
    const body = exprs.getExpression(data[INDEX_BODY]);
    const breakVariable = data[INDEX_BREAK] || DEFAULT_BREAK;
    const max = parseInt(data[INDEX_MAX]) || this.MAX_ITERATIONS;
    
    return new DoExpression(condition, body, breakVariable, max);
  }

  public static encode(expr: DoExpression): any 
  {
    const out = [this.id, expr.condition.encode(), expr.body.encode()];
    const hasMax = expr.maxIterations !== this.MAX_ITERATIONS;

    if (expr.breakVariable !== DEFAULT_BREAK || hasMax) {
      out.push(expr.breakVariable);
    }
    if (hasMax) {
      out.push(expr.maxIterations);
    }

    return out;
  }
  
  public condition: Expression;
  public body: Expression;
  public breakVariable: string;
  public maxIterations: number;

  public constructor(condition: Expression, body: Expression, breakVariable: string = DEFAULT_BREAK, maxIterations: number = DEFAULT_MAX_ITERATIONS) 
  {
    super();
    this.condition = condition;
    this.body = body;
    this.breakVariable = breakVariable;
    this.maxIterations = maxIterations;
  }

  public getId(): string
  {
    return DoExpression.id;
  }

  public getComplexity(def: Definitions): number
  {
    return Math.max(this.condition.getComplexity(def), this.body.getComplexity(def)) + 1;
  }

  public getScope()
  {
    return {
      [this.breakVariable]: BooleanType.baseType
    };
  }

  public encode(): any 
  {
    return DoExpression.encode(this);
  }

  public getType(def: Definitions, original: Type): Type | null
  {
    const { context } = def.getContextWithScope(original, this.getScope());

    return def.optionalType(this.body.getType(def, context));
  }

  public traverse<R>(traverse: Traverser<Expression, R>): R
  {
    return traverse.enter(this, () => {
      traverse.step('condition', this.condition);
      traverse.step('body', this.body);
    });
  }

  public do(body: Expression, condition?: Expression): DoExpression
  {
    return new DoExpression(condition || this.condition, body, this.breakVariable, this.maxIterations);
  }

  public while(condition: Expression): DoExpression
  {
    return new DoExpression(condition, this.body, this.breakVariable, this.maxIterations);
  }

  public withBreak(name: string)
  {
    return new DoExpression(this.condition, this.body, name, this.maxIterations);
  }

  public withMax(iterations: number)
  {
    return new DoExpression(this.condition, this.body, this.breakVariable, iterations);
  }

}