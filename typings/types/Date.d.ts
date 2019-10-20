import { Type, TypeProvider, TypeDescribeProvider, TypeSub, TypeCompatibleOptions } from '../Type';
import { Unit } from '../util/date/DateFunctions';
import { ExpressionBuilder } from '../ExpressionBuilder';
import { Expression } from '../Expression';
import { Definitions } from '../Definitions';
import { Traverser } from '../Traverser';
export interface DateOptions {
    parseAsUTC?: boolean;
    validateMin?: Date;
    validateMax?: Date;
    forceMin?: Date;
    forceMax?: Date;
    forceStartOf?: Unit;
    forceEndOf?: Unit;
    withTime?: boolean;
}
export declare class DateType extends Type<DateOptions> {
    static id: string;
    static operations: import("..").Operations;
    static baseType: DateType;
    static decode(data: any[], types: TypeProvider): DateType;
    static encode(type: DateType): any;
    private static decodeOptions;
    private static encodeOptions;
    static describePriority: number;
    static describe(data: any, describer: TypeDescribeProvider): Type | null;
    getId(): string;
    getOperations(): Record<string, import("..").Operation<any, any, any, any, any>>;
    merge(type: DateType, describer: TypeDescribeProvider): void;
    getSubType(expr: Expression, def: Definitions, context: Type): Type | null;
    getSubTypes(def: Definitions): TypeSub[];
    getExactType(value: any): Type;
    getSimplifiedType(): Type;
    protected isDeepCompatible(other: Type, options?: TypeCompatibleOptions): boolean;
    traverse<R>(traverse: Traverser<Type, R>): R;
    setParent(parent?: Type): void;
    removeDescribedRestrictions(): void;
    getCreateExpression(ex: ExpressionBuilder): Expression;
    getValidateExpression(ex: ExpressionBuilder): Expression;
    getCompareExpression(ex: ExpressionBuilder): Expression;
    isValid(value: any): boolean;
    normalize(value: any): any;
    newInstance(): DateType;
    clone(): DateType;
    encode(): any;
    create(): any;
    random(rnd: (a: number, b: number, whole: boolean) => number): any;
    getMin(): Date | undefined;
    getMax(): Date | undefined;
    fromJson(json: string): Date;
    toJson(value: Date): string;
}
