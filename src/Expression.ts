import { Type, TypeMap } from './Type';
import { DefinitionProvider } from './DefinitionProvider';
import { Traversable, Traverser, TraverseStep } from './Traverser';
import { ValidationHandler, ValidationType, ValidationSeverity, Validation } from './Validate';
import { FlowType } from "./FlowType";
import { isFunction } from './fns';


export interface ExpressionProvider 
{ 
  getExpression(value: any): Expression;
  getType(data: any, otherwise?: Type): Type;
  setLegacy(): void;
}

export interface ExpressionParser 
{
  (data: any[], exprs: ExpressionProvider): Expression;
}

export interface ExpressionClass<T extends Expression = any> 
{
  id: string;
  decode(this: ExpressionClass<T>, data: any[], exprs: ExpressionProvider): Expression;
  encode(this: ExpressionClass<T>, expr: T): any;
  new(...args: any[]): T;
}

export type ExpressionValue = any | Expression;

export type ExpressionMap = Record<string, Expression>;

export abstract class Expression implements Traversable<Expression>
{

  public static INSTANCE = 'instance';

  public parent?: Expression = undefined;
  
  public abstract getId(): string;

  public abstract getScope(): TypeMap | undefined;

  public abstract getComplexity(def: DefinitionProvider, context: Type, thisType?: Type): number;

  public abstract encode(): any;

  public abstract clone(): Expression;

  public abstract getType(def: DefinitionProvider, context: Type, thisType?: Type): Type | undefined;

  public abstract traverse<R>(traverse: Traverser<Expression, R>): R;

  public abstract setParent(parent?: Expression): void;

  public hasExpression(condition: ExpressionClass | ((e: Expression) => boolean)): boolean {
    return this.traverse(new Traverser<Expression>((e, path, step, traverser) => {
      if (isFunction(condition) ? condition(e) : condition.id === e.getId()) {
        traverser.stop(true);
      }
    }, false));
  }

  public abstract validate(def: DefinitionProvider, context: Type, handler: ValidationHandler, thisType?: Type): void;
  
  public abstract mutates(def: DefinitionProvider, arg: string, directly?: boolean): boolean;

  public isValidFlow(def: DefinitionProvider, type: FlowType, child?: Expression): boolean
  {
    return type === FlowType.EXIT
      ? true
      : this.parent
        ? this.parent.isValidFlow(def, type, this)
        : false;
  }

  public getContextFor(steps: TraverseStep[], def: DefinitionProvider, context: Type, thisType?: Type): Type
  {
    return context;
  }

  public isDynamic(): boolean
  {
    return true;
  }

  public getInnerExpression(def: DefinitionProvider, context: any, parent?: any): Expression | string | false
  {
    return false;
  }

  public isPathStart(): boolean
  {
    return false;
  }

  public isPathNode(): boolean
  {
    return false;
  }

  public isPathWritable(defs: DefinitionProvider): boolean
  {
    return true;
  }
  
  public getPath(): TraverseStep[]
  {
    return this.getRootExpression().traverse(new Traverser((type, _, path, traverser) =>
    {
      if (type === this)
      {
        traverser.stop(path.slice());
      }
    }, [] as TraverseStep[]));
  }

  public getExpressionFromPath(path: TraverseStep[]): Expression | undefined
  {
    if (path.length === 0)
    {
      return this;
    }
    
    const step = this.getExpressionFromStep(path);

    if (!step || !step[1])
    {
      return undefined;
    }

    const [steps, expr] = step;

    return expr.getExpressionFromPath(path.slice(steps));
  }

  public getExpressionFromStep(steps: TraverseStep[]): [number, Expression] | undefined
  {
    return undefined;
  }

  public getRootExpression(): Expression
  {
    let node: Expression = this;

    while (node.parent)
    {
      node = node.parent;
    }

    return node;
  }

  public validations(def: DefinitionProvider, context: Type): Validation[]
  {
    const validations: Validation[] = [];

    this.validate(def, context, x => validations.push(x));

    return validations;
  }

  protected validateType(def: DefinitionProvider, context: Type, expectedComplex: Type | undefined, subject: Expression | undefined, handler: ValidationHandler, parent: Expression = this): void
  {
    const expected = expectedComplex ? expectedComplex.getSimplifiedType() : undefined;
    const actualComplete = subject ? subject.getType(def, context) : undefined;
    const actual = actualComplete ? actualComplete.getSimplifiedType() : undefined;
    let test = actual;

    if (!actual)
    {
      if (expected && !expected.isOptional())
      {
        handler({
          type: ValidationType.INCOMPATIBLE_TYPES,
          severity: ValidationSeverity.HIGH,
          context,
          subject,
          parent,
          expected,
        });
      }
    }
    else if ( test && expected )
    {
      if (actual.isOptional() && !expected.isOptional())
      {
        test = test.getRequired();
      }

      if (!expected.acceptsType(test))
      {
        handler({
          type: ValidationType.INCOMPATIBLE_TYPES,
          severity: expected.isCompatible(actual)
            ? ValidationSeverity.MEDIUM
            : ValidationSeverity.HIGH,
          context,
          subject,
          parent,
          expected,
          actual,
        });
      }
      else if (test !== actual)
      {
        handler({
          type: ValidationType.POSSIBLY_NULL,
          severity: ValidationSeverity.MEDIUM,
          context,
          subject,
          parent,
          expected,
          actual,
        });
      }
    }

    if (subject)
    {
      subject.validate(def, context, handler);
    }
  }

}