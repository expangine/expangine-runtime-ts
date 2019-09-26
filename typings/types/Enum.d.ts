import { Type, TypeDescribeProvider, TypeProvider } from '../Type';
import { Operations } from '../Operation';
import { ExpressionBuilder } from '../ExpressionBuilder';
import { Expression } from '../Expression';
import { Definitions } from '../Definitions';
export interface EnumOptions {
    key: Type;
    value: Type;
    constants: Map<any, any>;
}
export declare class EnumType extends Type<EnumOptions> {
    static id: string;
    static operations: Operations;
    static baseType: EnumType;
    static decode(data: any[], types: TypeProvider): EnumType;
    static encode(type: EnumType): any;
    static describePriority: number;
    static describe(): Type | null;
    getId(): string;
    getOperations(): Record<string, import("../Operation").Operation<any, any, any, any, any>>;
    merge(type: EnumType, describer: TypeDescribeProvider): void;
    getSubType(expr: Expression, def: Definitions, context: Type): Type | null;
    getSubTypes(): {
        key: Type<any>;
        value: Type<any>;
    };
    getExactType(value: any): Type;
    isCompatible(other: Type): boolean;
    getCreateExpression(ex: ExpressionBuilder): Expression;
    getValidateExpression(ex: ExpressionBuilder): Expression;
    getCompareExpression(ex: ExpressionBuilder): Expression;
    isValid(test: any): boolean;
    normalize(value: any): any;
    newInstance(): EnumType;
    clone(): EnumType;
    encode(): any;
    create(): any;
    random(rnd: (a: number, b: number, whole: boolean) => number): any;
    fromJson(json: any): any;
    toJson(value: any): any;
}
