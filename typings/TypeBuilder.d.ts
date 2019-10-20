import { TypeInput, TypeInputMap } from './Type';
import { ExpressionBuilder } from './ExpressionBuilder';
import { Expression } from './Expression';
import { NumberType } from './types/Number';
import { AnyType } from './types/Any';
import { BooleanType } from './types/Boolean';
import { DateOptions, DateType } from './types/Date';
import { TextType, TextOptions } from './types/Text';
import { EnumType } from './types/Enum';
import { ObjectType } from './types/Object';
import { FunctionType } from './types/Function';
import { ListType } from './types/List';
import { ManyType } from './types/Many';
import { MapType } from './types/Map';
import { NullType } from './types/Null';
import { OptionalType } from './types/Optional';
import { TupleType } from './types/Tuple';
export declare class TypeBuilder {
    any(): AnyType;
    bool(trues?: Record<string, true>, falses?: Record<string, true>): BooleanType;
    date(options?: DateOptions): DateType;
    enum(value: TypeInput, key?: TypeInput, constants?: Map<any, any>): EnumType;
    func(returnType: TypeInput, params: TypeInputMap, getExpression: (ex: ExpressionBuilder) => Expression): FunctionType;
    list(item: TypeInput, min?: number, max?: number): ListType;
    many(types: TypeInput[]): ManyType;
    many(...types: TypeInput[]): ManyType;
    map(value: TypeInput, key?: TypeInput): MapType;
    null(): NullType;
    number(min?: number, max?: number, whole?: boolean): NumberType;
    int(min?: number, max?: number): NumberType;
    object(props?: TypeInputMap): ObjectType<import("./types/Object").ObjectOptions>;
    optional(type: TypeInput): OptionalType;
    text(options?: TextOptions): TextType;
    tuple(types: TypeInput[]): TupleType;
    tuple(...types: TypeInput[]): TupleType;
}
