import { Type, TypeInput, TypeMap, TypeMapStrict, TypeResolved } from './Type';
import { GenericType } from './types/Generic';
export declare type OperationOptions<R extends TypeInput, P extends TypeMap = never, O extends TypeMap = never, S extends TypeMap = never> = [R] | [R, P] | [R, P, O] | [R, P, O, S];
export interface OperationFlags {
    complexity: number;
    mutates: string[];
}
export interface Operation<R extends Type = any, P extends TypeMapStrict = never, O extends TypeMapStrict = never, S extends TypeMapStrict = never, G extends string = never> extends OperationFlags {
    id: string;
    returnType: R;
    params?: P;
    optional?: O;
    scope?: S;
    generics?: Record<G, GenericType>;
}
export declare type OperationResolved<R extends TypeInput = any, P extends TypeMap = never, O extends TypeMap = never, S extends TypeMap = never, G extends string = never> = Operation<TypeResolved<R>, TypeResolved<P>, TypeResolved<O>, TypeResolved<S>, G>;
export interface OperationBuilder<T extends Type, R extends TypeInput = any, P extends TypeMap = never, O extends TypeMap = never, S extends TypeMap = never, G extends string = never> {
    id: string;
    dynamic: boolean;
    complexity: number;
    scopeDefaults?: Record<keyof S, string>;
    (type: T): OperationResolved<R, P, O, S, G>;
}
export declare class Operations<T extends Type> {
    prefix: string;
    map: Record<string, OperationBuilder<T>>;
    constructor(prefix: string);
    getBuilder(id: string): OperationBuilder<any>;
    get(id: string, type: T): Operation<any, any, any, any, any>;
    set<R extends TypeInput = any, P extends TypeMap = never, O extends TypeMap = never, S extends TypeMap = never>(localId: string, flags: Partial<OperationFlags>, returnType: R, params?: P, optional?: O, scope?: S): OperationBuilder<T, R, P, O, S>;
    build<R extends TypeInput = any, P extends TypeMap = never, O extends TypeMap = never, S extends TypeMap = never, G extends string = never>(localId: string, flags: Partial<OperationFlags>, getOptions: (type: T, generics?: Record<G, GenericType>) => OperationOptions<R, P, O, S>, scopeDefaults?: Record<keyof S, string>, generics?: Record<G, GenericType>): OperationBuilder<T, R, P, O, S>;
    private put;
}