import { Expression, ExpressionProvider, ExpressionValue, ExpressionMap } from '../Expression';
import { DefinitionProvider } from '../DefinitionProvider';
import { Operation } from '../Operation';
import { Type, TypeMap } from '../Type';
import { Traverser, TraverseStep } from '../Traverser';
import { ValidationHandler } from '../Validate';
import { AndExpression } from './And';
import { OrExpression } from './Or';
import { NotExpression } from './Not';
import { FlowType } from "../FlowType";
export declare class OperationExpression<P extends string = never, O extends string = never, S extends string = never> extends Expression {
    static id: string;
    static decode(data: any[], exprs: ExpressionProvider): OperationExpression;
    static encode(expr: OperationExpression): any;
    static create<P extends string, O extends string, S extends string>(op: Operation<P, O, S, any, any>, params: Record<P, Expression> & Partial<Record<O, Expression>>, scopeAlias?: Partial<Record<S, string>>): OperationExpression<P, O, S>;
    name: string;
    params: ExpressionMap;
    scopeAlias: Record<string, string>;
    constructor(name: string, params: ExpressionMap, scopeAlias?: Record<string, string>);
    getId(): string;
    getComplexity(def: DefinitionProvider, context: Type): number;
    getScope(): null;
    encode(): any;
    clone(): Expression;
    getType(def: DefinitionProvider, context: Type): Type | null;
    getContextFor(steps: TraverseStep[], def: DefinitionProvider, context: Type, thisType?: Type): Type;
    getParamTypes(def: DefinitionProvider, context: Type): TypeMap;
    getScopedContext(def: DefinitionProvider, outerContext: Type): Type;
    traverse<R>(traverse: Traverser<Expression, R>): R;
    getExpressionFromStep(steps: TraverseStep[]): [number, Expression] | null;
    setParent(parent?: Expression): void;
    validate(def: DefinitionProvider, context: Type, handler: ValidationHandler): void;
    mutates(def: DefinitionProvider, arg: string, directly?: boolean): boolean;
    isValidFlow(def: DefinitionProvider, type: FlowType): boolean;
    param(name: P | O, value: ExpressionValue): OperationExpression<P, O, S>;
    alias(scoped: S, alias: string): OperationExpression<P, O, S>;
    and(exprs: Expression | Expression[]): AndExpression;
    or(exprs: Expression | Expression[]): OrExpression;
    not(): NotExpression;
}
