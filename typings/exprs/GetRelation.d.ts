import { Expression, ExpressionProvider } from '../Expression';
import { Definitions } from '../Definitions';
import { Type } from '../Type';
import { Traverser } from '../Traverser';
import { ValidationHandler } from '../Validate';
export declare class GetRelationExpression extends Expression {
    static id: string;
    static readonly instance: GetRelationExpression;
    static decode(data: any[], exprs: ExpressionProvider): GetRelationExpression;
    static encode(expr: GetRelationExpression): any;
    name: string;
    constructor(name: string);
    getId(): string;
    getComplexity(def: Definitions): number;
    getScope(): null;
    encode(): any;
    clone(): Expression;
    getType(def: Definitions, context: Type): Type | null;
    traverse<R>(traverse: Traverser<Expression, R>): R;
    setParent(parent?: Expression): void;
    validate(def: Definitions, context: Type, handler: ValidationHandler): void;
}
