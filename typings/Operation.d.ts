import { Type, TypeInput } from './Type';
export interface OperationFlags {
    complexity: number;
    mutates: string[];
}
export interface Operation<P extends string = never, O extends string = never, S extends string = never, H extends (P | O) = never, R extends (P | O) = never> extends OperationFlags {
    id: string;
    params: P[];
    optional: O[];
    scope: S[];
    scopeDefaults: Record<S, string>;
    hasScope: H[];
    resultDependency: R[];
}
export declare type OperationResolved<P extends string, O extends string, S extends string, H extends (P | O), R extends (P | O)> = Operation<string extends P ? never : P, string extends O ? never : O, string extends S ? never : S, string extends H ? never : H extends ((string extends P ? never : P) | (string extends O ? never : O)) ? H : never, string extends R ? never : R extends ((string extends P ? never : P) | (string extends O ? never : O)) ? R : never>;
export declare type OperationTypeInput<I extends string> = TypeInput | ((inputs: Record<I, Type | undefined>) => TypeInput);
export interface OperationTypes<P extends string = never, O extends string = never, S extends string = never> {
    returnType: OperationTypeInput<P | O>;
    params: Record<P, OperationTypeInput<P | O>>;
    optional: Record<O, OperationTypeInput<P | O>>;
    scope: Record<S, OperationTypeInput<P | O>>;
}
export declare class Operations {
    prefix: string;
    map: Record<string, Operation<any, any, any, any, any>>;
    types: Record<string, OperationTypes<any, any, any>>;
    constructor(prefix: string);
    get(id: string): Operation<any, any, any, any, any>;
    getTypes(id: string): OperationTypes<any, any, any>;
    set<P extends string, O extends string, S extends string, H extends (P | O), R extends (P | O)>(localId: string, flags?: Partial<OperationFlags>, params?: P[], optional?: O[], scope?: S[], hasScope?: H[], resultDependency?: R[]): OperationResolved<P, O, S, H, R>;
    setTypes(op: Operation<never, never, never, never, never>, returnType: OperationTypeInput<never>): OperationTypes<never, never, never>;
    setTypes<P extends string>(op: Operation<P, never, never, any, any>, returnType: OperationTypeInput<P>, params: Record<P, OperationTypeInput<P>>): OperationTypes<P, never, never>;
    setTypes<P extends string, O extends string>(op: Operation<P, O, never, any, any>, returnType: OperationTypeInput<P | O>, params: Record<P, OperationTypeInput<P | O>>, optional: Record<O, OperationTypeInput<P | O>>): OperationTypes<P, O, never>;
    setTypes<P extends string, O extends string, S extends string>(op: Operation<P, O, S, any, any>, returnType: OperationTypeInput<P | O>, params: Record<P, OperationTypeInput<P | O>>, optional: Record<O, OperationTypeInput<P | O>>, scope: Record<S, OperationTypeInput<P | O>>): OperationTypes<P, O, S>;
}
