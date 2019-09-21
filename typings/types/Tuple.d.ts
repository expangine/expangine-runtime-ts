import { Type, TypeProvider, TypeDescribeProvider, TypeInput } from '../Type';
import { Operations } from '../Operation';
import { ExpressionBuilder } from '../ExpressionBuilder';
import { Expression } from '../Expression';
export declare class TupleType extends Type<Type[]> {
    static id: string;
    static operations: Operations;
    static baseType: TupleType;
    static decode(data: any[], types: TypeProvider): TupleType;
    static encode(type: TupleType): any;
    static describePriority: number;
    static describe(data: any, describer: TypeDescribeProvider): Type | null;
    static forItem(types: TypeInput[]): TupleType;
    subs?: Record<string, Type>;
    getId(): string;
    getOperations(): Record<string, import("../Operation").Operation<any, any, any>>;
    merge(type: TupleType, describer: TypeDescribeProvider): void;
    getSubTypes(): Record<string, Type<any>>;
    getExactType(value: any): Type;
    getCreateExpression(ex: ExpressionBuilder): Expression;
    getValidateExpression(ex: ExpressionBuilder): Expression;
    getCompareExpression(ex: ExpressionBuilder): Expression;
    isCompatible(other: Type): boolean;
    isValid(value: any): boolean;
    normalize(value: any): any;
    newInstance(): TupleType;
    clone(): TupleType;
    encode(): any;
    create(): any[];
    random(rnd: (a: number, b: number, whole: boolean) => number): any;
    fromJson(json: any[]): any[];
    toJson(value: any[]): any[];
}
