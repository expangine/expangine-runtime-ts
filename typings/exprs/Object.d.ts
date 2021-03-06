import { Expression, ExpressionProvider, ExpressionMap } from '../Expression';
import { DefinitionProvider } from '../DefinitionProvider';
import { Type } from '../Type';
import { Traverser, TraverseStep } from '../Traverser';
import { ValidationHandler } from '../Validate';
export declare class ObjectExpression extends Expression {
    static id: string;
    static decode(data: any[], exprs: ExpressionProvider): ObjectExpression;
    static encode(expr: ObjectExpression): any;
    props: ExpressionMap;
    constructor(props: ExpressionMap);
    getId(): string;
    getComplexity(def: DefinitionProvider, context: Type): number;
    isDynamic(): boolean;
    getScope(): undefined;
    encode(): any;
    clone(): Expression;
    getType(def: DefinitionProvider, context: Type): Type | undefined;
    traverse<R>(traverse: Traverser<Expression, R>): R;
    getExpressionFromStep(steps: TraverseStep[]): [number, Expression] | undefined;
    setParent(parent?: Expression): void;
    validate(def: DefinitionProvider, context: Type, handler: ValidationHandler): void;
    mutates(def: DefinitionProvider, arg: string, directly?: boolean): boolean;
}
