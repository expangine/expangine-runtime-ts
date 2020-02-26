import { Expression, ExpressionValue, ExpressionMap } from './Expression';
import { NotExpression } from './exprs/Not';
import { AndExpression } from './exprs/And';
import { NoExpression } from './exprs/No';
import { DefineExpression } from './exprs/Define';
import { DoExpression } from './exprs/Do';
import { ChainExpression } from './exprs/Chain';
import { CommentExpression } from './exprs/Comment';
import { ComputedExpression } from './exprs/Computed';
import { ConstantExpression } from './exprs/Constant';
import { ForExpression } from './exprs/For';
import { GetExpression } from './exprs/Get';
import { GetDataExpression } from './exprs/GetData';
import { GetEntityExpression } from './exprs/GetEntity';
import { GetRelationExpression } from './exprs/GetRelation';
import { IfExpression } from './exprs/If';
import { InvokeExpression } from './exprs/Invoke';
import { OperationExpression } from './exprs/Operation';
import { Operation } from './Operation';
import { OrExpression } from './exprs/Or';
import { ReturnExpression } from './exprs/Return';
import { SetExpression } from './exprs/Set';
import { SubExpression } from './exprs/Sub';
import { SwitchExpression } from './exprs/Switch';
import { TemplateExpression } from './exprs/Template';
import { UpdateExpression } from './exprs/Update';
import { WhileExpression } from './exprs/While';
import { TupleExpression } from './exprs/Tuple';
import { ObjectExpression } from './exprs/Object';
import { Type } from './Type';
export declare class Exprs {
    static autoSetParent: boolean;
    static setParent<E extends Expression>(expr: E, force?: boolean): E;
    static parse(values: ExpressionValue[]): Expression[];
    static parse(values: Record<string, ExpressionValue>): ExpressionMap;
    static parse(value: ExpressionValue): Expression;
    static cast(valueType: Type, targetType: Type): Expression;
    static cast(valueType: Type, targetType: Type, createOnMissing: false): Expression | null;
    static and(...exprs: Expression[]): AndExpression;
    static body(...exprs: Expression[]): ChainExpression;
    static const(value: any): ConstantExpression;
    static define(vars?: Record<string, ExpressionValue>, body?: Expression): DefineExpression;
    static do(body: Expression, condition?: Expression, breakVariable?: string, maxIterations?: number): DoExpression;
    static for(variable: string, start?: ExpressionValue, end?: ExpressionValue, body?: Expression, breakVariable?: string, maxIterations?: number): ForExpression;
    static get(...path: ExpressionValue[]): GetExpression;
    static sub(value: ExpressionValue, ...path: ExpressionValue[]): SubExpression;
    static computed(name: string, value: ExpressionValue): ComputedExpression;
    static if(condition: Expression, body?: Expression, otherwise?: Expression): IfExpression;
    static invoke(name: string, args?: Record<string, ExpressionValue>): InvokeExpression;
    static noop(): NoExpression;
    static not(expr: Expression): NotExpression;
    static object(props: Record<string, ExpressionValue>): ObjectExpression;
    static op<P extends string, O extends string, S extends string>(op: Operation<P, O, S, any, any>, params: Record<P, ExpressionValue> & Partial<Record<O, ExpressionValue>>, scopeAlias?: Partial<Record<S, string>>): OperationExpression<P, O, S>;
    static or(...exprs: Expression[]): OrExpression;
    static return(value?: ExpressionValue): ReturnExpression;
    static set(...path: ExpressionValue[]): SetExpression;
    static switch<P extends string, O extends string, S extends string>(value: Expression, op: Operation<P, O, S, any, any>): SwitchExpression;
    static template(template: string, params?: Record<string, ExpressionValue>): TemplateExpression;
    static tuple(...elements: ExpressionValue[]): TupleExpression;
    static update(...path: ExpressionValue[]): UpdateExpression;
    static while(condition: Expression, body?: Expression, breakVariable?: string, maxIterations?: number): WhileExpression;
    static undefined(): ConstantExpression;
    static null(): ConstantExpression;
    static true(): ConstantExpression;
    static false(): ConstantExpression;
    static zero(): ConstantExpression;
    static one(): ConstantExpression;
    static compareEqual(): ConstantExpression;
    static compareLess(): ConstantExpression;
    static compareGreater(): ConstantExpression;
    static string(): ConstantExpression;
    static comment(comment: string): CommentExpression;
    static entity(name: string): GetEntityExpression;
    static relation(name: string): GetRelationExpression;
    static data(name: string): GetDataExpression;
}
