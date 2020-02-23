import { Type, TypeProvider, TypeDescribeProvider, TypeSub, TypeInput, TypeCompatibleOptions } from '../Type';
import { Operations } from '../Operation';
import { Expression } from '../Expression';
import { Definitions } from '../Definitions';
import { Traverser, TraverseStep } from '../Traverser';
import { Computeds } from '../Computed';
export declare class OptionalType extends Type<Type> {
    static STEP_OPTIONAL: string;
    static id: string;
    static operations: Operations;
    static computeds: Computeds;
    static baseType: OptionalType;
    static decode(data: any[], types: TypeProvider): OptionalType;
    static encode(type: OptionalType): any;
    static describePriority: number;
    static describe(data: any, describer: TypeDescribeProvider): Type | null;
    static registered: boolean;
    static register(): void;
    static for(type: TypeInput): OptionalType;
    getOperations(): Record<string, import("../Operation").Operation<any, any, any, any, any>>;
    getId(): string;
    merge(type: OptionalType): void;
    getSubType(expr: Expression, def: Definitions, context: Type): Type | null;
    getSubTypes(def: Definitions): TypeSub[];
    getExactType(value: any): Type;
    getSimplifiedType(): Type;
    protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean;
    isOptional(): boolean;
    isSimple(): boolean;
    protected acceptsOtherTypes(): boolean;
    traverse<R>(traverse: Traverser<Type, R>): R;
    getTypeFromStep(step: TraverseStep): Type | null;
    setParent(parent?: Type): void;
    removeDescribedRestrictions(): void;
    getCreateExpression(): Expression;
    getValidateExpression(): Expression;
    getCompareExpression(): Expression;
    getValueChangeExpression(newValue: Expression, from?: TraverseStep, to?: TraverseStep): Expression;
    isValid(value: any): boolean;
    normalize(value: any): any;
    newInstance(): OptionalType;
    clone(): OptionalType;
    encode(): any;
    create(): any;
    random(rnd: (a: number, b: number, whole: boolean) => number): any;
    fromJson(json: any): any;
    toJson(value: any): any;
}
