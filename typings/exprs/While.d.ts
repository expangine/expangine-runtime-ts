import { Expression, ExpressionProvider } from '../Expression';
import { BooleanType } from '../types/Boolean';
import { Definitions } from '../Definitions';
import { Type } from '../Type';
import { Traverser, TraverseStep } from '../Traverser';
import { ValidationHandler } from '../Validate';
export declare class WhileExpression extends Expression {
    static STEP_CONDITION: string;
    static STEP_BODY: string;
    static MAX_ITERATIONS: number;
    static id: string;
    static decode(data: any[], exprs: ExpressionProvider): WhileExpression;
    static encode(expr: WhileExpression): any;
    condition: Expression;
    body: Expression;
    breakVariable: string;
    maxIterations: number;
    constructor(condition: Expression, body: Expression, breakVariable?: string, maxIterations?: number);
    getId(): string;
    getComplexity(def: Definitions): number;
    getScope(): {
        [x: string]: BooleanType;
    };
    encode(): any;
    clone(): Expression;
    getType(def: Definitions, original: Type): Type | null;
    traverse<R>(traverse: Traverser<Expression, R>): R;
    getExpressionFromStep(steps: TraverseStep[]): [number, Expression] | null;
    setParent(parent?: Expression): void;
    validate(def: Definitions, context: Type, handler: ValidationHandler): void;
    while(condition: Expression): WhileExpression;
    run(body: Expression): WhileExpression;
    withBreak(name: string): WhileExpression;
    withMax(iterations: number): WhileExpression;
}
