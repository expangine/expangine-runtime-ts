import { Expression, ExpressionProvider, ExpressionValue } from '../Expression';
import { DefinitionProvider } from '../DefinitionProvider';
import { AnyType } from '../types/Any';
import { Type } from '../Type';
import { Traverser, TraverseStep } from '../Traverser';
import { ValidationHandler } from '../Validate';
import { PathExpression } from './Path';
export declare class SetExpression extends Expression {
    static STEP_PATH: string;
    static STEP_VALUE: string;
    static id: string;
    static decode(data: any[], exprs: ExpressionProvider): SetExpression;
    static encode(expr: SetExpression): any;
    static create(path: ExpressionValue[], value: ExpressionValue, currentVariable?: string): SetExpression;
    path: PathExpression;
    value: Expression;
    currentVariable: string;
    constructor(path: PathExpression, value: Expression, currentVariable?: string);
    getId(): string;
    getComplexity(def: DefinitionProvider, context: Type): number;
    getScope(): {
        [x: string]: AnyType;
    } | undefined;
    encode(): any;
    clone(): Expression;
    getType(def: DefinitionProvider, context: Type): Type | undefined;
    getContextFor(steps: TraverseStep[], def: DefinitionProvider, context: Type, thisType?: Type): Type;
    traverse<R>(traverse: Traverser<Expression, R>): R;
    getExpressionFromStep(steps: TraverseStep[]): [number, Expression] | undefined;
    setParent(parent?: Expression): void;
    validate(def: DefinitionProvider, context: Type, handler: ValidationHandler): void;
    mutates(def: DefinitionProvider, arg: string, directly?: boolean): boolean;
    to(value: ExpressionValue, currentVariable?: string): SetExpression;
    withVariable(name: string): SetExpression;
}
