import { Expression, ExpressionProvider, ExpressionValue } from '../Expression';
import { Definitions } from '../Definitions';
import { Operation } from '../Operation';
import { AndExpression } from './And';
import { OrExpression } from './Or';
import { NotExpression } from './Not';
export declare class OperationExpression<P extends string = never, O extends string = never, S extends string = never> extends Expression {
    static id: string;
    static decode(data: any[], exprs: ExpressionProvider): OperationExpression;
    static encode(expr: OperationExpression): any;
    static create<P extends string, O extends string, S extends string>(op: Operation<P, O, S>, params: Record<P, Expression> & Partial<Record<O, Expression>>, scopeAlias?: Partial<Record<S, string>>): OperationExpression<P, O, S>;
    name: string;
    params: Record<string, Expression>;
    scopeAlias: Record<string, string>;
    constructor(name: string, params: Record<string, Expression>, scopeAlias?: Record<string, string>);
    getId(): string;
    getComplexity(def: Definitions): number;
    getScope(): null;
    encode(): any;
    param(name: P | O, value: ExpressionValue): OperationExpression<P, O, S>;
    alias(scoped: S, alias: string): OperationExpression<P, O, S>;
    and(exprs: Expression | Expression[]): AndExpression;
    or(exprs: Expression | Expression[]): OrExpression;
    not(): NotExpression;
}
