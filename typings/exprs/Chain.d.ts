import { Expression, ExpressionProvider } from '../Expression';
import { Definitions } from '../Definitions';
import { Type } from '../Type';
import { Traverser, TraverseStep } from '../Traverser';
import { ValidationHandler } from '../Validate';
export declare class ChainExpression extends Expression {
    static id: string;
    static decode(data: any[], exprs: ExpressionProvider): ChainExpression;
    static encode(expr: ChainExpression): any;
    chain: Expression[];
    constructor(chain: Expression[]);
    getId(): string;
    getComplexity(def: Definitions): number;
    getScope(): null;
    encode(): any;
    clone(): Expression;
    getType(def: Definitions, context: Type): Type | null;
    traverse<R>(traverse: Traverser<Expression, R>): R;
    getExpressionFromStep(steps: TraverseStep[]): [number, Expression] | null;
    setParent(parent?: Expression): void;
    validate(def: Definitions, context: Type, handler: ValidationHandler): void;
    add(exprs: Expression | Expression[]): ChainExpression;
}
