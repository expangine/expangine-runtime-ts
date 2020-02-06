import { Type, TypeProvider, TypeDescribeProvider, TypeSub, TypeCompatibleOptions } from '../Type';
import { Expression } from '../Expression';
import { Definitions } from '../Definitions';
import { Traverser } from '../Traverser';
export declare class AliasedType extends Type<string> {
    static id: string;
    static operations: import("..").Operations;
    static computeds: import("..").Computeds;
    static baseType: AliasedType;
    static decode(data: any[], types: TypeProvider): AliasedType;
    static encode(type: AliasedType): any;
    static describePriority: number;
    static describe(data: any, describer: TypeDescribeProvider): Type | null;
    static registered: boolean;
    static register(): void;
    static for(name: string, provider: TypeProvider): AliasedType;
    protected provider: TypeProvider;
    constructor(name: string, provider: TypeProvider);
    getType(): Type<any>;
    getOperations(): Record<string, import("..").Operation<any, any, any, any, any>>;
    getId(): string;
    merge(type: AliasedType, describer: TypeDescribeProvider): void;
    getSubType(expr: Expression, def: Definitions, context: Type): Type | null;
    getSubTypes(def: Definitions): TypeSub[];
    getExactType(value: any): Type;
    getSimplifiedType(): Type;
    protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean;
    isOptional(): boolean;
    isSimple(): boolean;
    protected acceptsOtherTypes(): boolean;
    traverse<R>(traverse: Traverser<Type, R>): R;
    setParent(parent?: Type): void;
    removeDescribedRestrictions(): void;
    getCreateExpression(): Expression;
    getValidateExpression(): Expression;
    getCompareExpression(): Expression;
    isValid(value: any): boolean;
    normalize(value: any): any;
    newInstance(): AliasedType;
    clone(): AliasedType;
    encode(): any;
    create(): any;
    random(rnd: (a: number, b: number, whole: boolean) => number): any;
    fromJson(json: any): any;
    toJson(value: any): any;
}
