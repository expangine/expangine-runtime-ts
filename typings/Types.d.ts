import { Type, TypeInput, TypeInputMap, TypeClass, TypeResolved } from './Type';
import { MapInput } from './fns';
import { NumberType } from './types/Number';
import { AnyType } from './types/Any';
import { BooleanType } from './types/Boolean';
import { DateOptions, DateType } from './types/Date';
import { TextType, TextOptions } from './types/Text';
import { EnumType } from './types/Enum';
import { ObjectType } from './types/Object';
import { ListType } from './types/List';
import { ManyType } from './types/Many';
import { MapType } from './types/Map';
import { NullType } from './types/Null';
import { TupleType } from './types/Tuple';
import { NotType } from './types/Not';
import { ColorType } from './types/Color';
import { SetType } from './types/Set';
export declare class Types {
    static INDEX: NumberType;
    static LENGTH: NumberType;
    static CHAR: TextType;
    static autoSetParent: boolean;
    static setParent<T extends Type>(type: T, force?: boolean): T;
    static any(): AnyType;
    static bool(trues?: Record<string, true>, falses?: Record<string, true>): BooleanType;
    static date(options?: DateOptions): DateType;
    static enum(value: TypeInput, key?: TypeInput, constants?: MapInput): EnumType;
    static enumForText(constants: string[] | Array<[string, string]> | Map<string, string>): EnumType;
    static list(item: TypeInput, min?: number, max?: number): ListType;
    static many(types: TypeInput[]): ManyType;
    static many(...types: TypeInput[]): ManyType;
    static not(types: TypeInput[]): NotType;
    static not(...types: TypeInput[]): NotType;
    static map(value: TypeInput, key?: TypeInput): MapType;
    static null(): NullType;
    static number(min?: number, max?: number, whole?: boolean): NumberType;
    static int(min?: number, max?: number): NumberType;
    static index(max?: number): NumberType;
    static char(): TextType;
    static object(props?: TypeInputMap): ObjectType<{
        props: Record<string, Type<any>>;
    }>;
    static optional(type: TypeInput): Type;
    static color(options?: {
        hasAlpha?: boolean;
    }): ColorType;
    static set(value: TypeInput): SetType;
    static text(options?: TextOptions): TextType;
    static tuple(types: TypeInput[]): TupleType;
    static tuple(...types: TypeInput[]): TupleType;
    static parse(input: TypeInput): Type;
    static simplify(type: Type): Type;
    static simplify(type: Type | null): Type | null;
    static resolve<T>(types: T): TypeResolved<T>;
    static reduce(type: Type[]): Type;
    static explode(outerType: Type): Type[];
    static maybe<M extends Type>(type: Type, maybe: TypeClass<M>): Type<any>;
    static mergeMany(readonlyTypes: Type[]): Type | null;
    static mergeMany(readonlyTypes: Type[], noTypes: Type): Type;
    static merge(a: Type, b: Type): Type;
}
