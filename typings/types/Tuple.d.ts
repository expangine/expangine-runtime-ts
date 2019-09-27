import { Type, TypeProvider, TypeDescribeProvider, TypeInput, TypeMap } from '../Type';
import { ExpressionBuilder } from '../ExpressionBuilder';
import { Expression } from '../Expression';
import { Definitions } from '../Definitions';
import { NumberType } from './Number';
import { Traverser } from '../Traverser';
export declare class TupleType extends Type<Type[]> {
    static lengthType: NumberType;
    static indexType: NumberType;
    static id: string;
    static operations: import("..").Operations;
    static baseType: TupleType;
    static decode(data: any[], types: TypeProvider): TupleType;
    static encode(type: TupleType): any;
    static describePriority: number;
    static describe(data: any, describer: TypeDescribeProvider): Type | null;
    static forItem(types: TypeInput[]): TupleType;
    getId(): string;
    getOperations(): Record<string, import("..").Operation<any, any, any, any, any>>;
    merge(type: TupleType, describer: TypeDescribeProvider): void;
    getSubType(expr: Expression, def: Definitions, context: Type): Type | null;
    getSubTypes(): [TypeMap, Type[]];
    getExactType(value: any): Type;
    getSimplifiedType(): Type;
    getCreateExpression(ex: ExpressionBuilder): Expression;
    getValidateExpression(ex: ExpressionBuilder): Expression;
    getCompareExpression(ex: ExpressionBuilder): Expression;
    isCompatible(other: Type): boolean;
    traverse<R>(traverse: Traverser<Type, R>): R;
    setParent(parent?: Type): void;
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
