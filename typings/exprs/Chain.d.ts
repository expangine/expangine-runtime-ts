import { Expression, ExpressionProvider } from '../Expression';
import { Definitions } from '../Definitions';
import { Type } from '../Type';
import { Traverser } from '../Traverser';
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
    getType(def: Definitions, context: Type): Type | null;
    traverse<R>(traverse: Traverser<Expression, R>): R;
    setParent(parent?: Expression): void;
    add(exprs: Expression | Expression[]): ChainExpression;
}
