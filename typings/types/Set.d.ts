import { Type, TypeProvider, TypeInput, TypeDescribeProvider, TypeSub, TypeCompatibleOptions } from '../Type';
import { Expression } from '../Expression';
import { DefinitionProvider } from '../DefinitionProvider';
import { Traverser, TraverseStep } from '../Traverser';
export interface SetOptions {
    value: Type;
}
export declare class SetType extends Type<SetOptions> {
    static STEP_VALUE: string;
    static id: string;
    static operations: import("..").Operations;
    static computeds: import("..").Computeds;
    static baseType: SetType;
    static decode(data: any[], types: TypeProvider): SetType;
    static encode(type: SetType): any;
    static describePriority: number;
    static describe(data: any, describer: TypeDescribeProvider, cache: Map<any, Type>): Type | null;
    static registered: boolean;
    static register(): void;
    static forItem(valueOrClass: TypeInput): SetType;
    getId(): string;
    getOperations(): Record<string, import("..").OperationGeneric>;
    merge(type: SetType): void;
    getSubType(expr: Expression, def: DefinitionProvider, context: Type): Type | null;
    getSubTypes(def: DefinitionProvider): TypeSub[];
    getExactType(value: any): Type;
    getSimplifiedType(): Type;
    protected isDeepCompatible(other: Type, options: TypeCompatibleOptions): boolean;
    isOptional(): boolean;
    isSimple(): boolean;
    traverse<R>(traverse: Traverser<Type, R>): R;
    getTypeFromStep(step: TraverseStep): Type | null;
    setParent(parent?: Type): void;
    removeDescribedRestrictions(): void;
    getCreateExpression(): Expression;
    getValidateExpression(): Expression;
    getCompareExpression(): Expression;
    getValueChangeExpression(newValue: Expression, from?: TraverseStep, to?: TraverseStep): Expression;
    isValid(test: any): boolean;
    normalize(test: any): any;
    newInstance(): SetType;
    clone(): SetType;
    encode(): any;
    create(): Set<any>;
    random(rnd: (a: number, b: number, whole: boolean) => number): any;
    fromJson(json: Array<any>): Set<any>;
    toJson(set: Set<any>): Array<any>;
}
