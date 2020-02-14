import { Type, TypeClass, TypeParser, TypeInput, TypeInputMap, TypeMap, TypeProps, TypeCompatibleOptions } from './Type';
import { Expression, ExpressionClass, ExpressionMap } from './Expression';
import { Operations, OperationTypes, OperationTypeInput, OperationGeneric, OperationPair, OperationMapping } from './Operation';
import { OptionalType } from './types/Optional';
import { ManyType } from './types/Many';
import { FunctionType } from './types/Function';
import { ObjectType } from './types/Object';
import { Computeds, Computed } from './Computed';
import { TypeStorageOptions, TypeStorage } from './TypeStorage';
import { Relation, RelationOptions, TypeRelation } from './Relation';
export interface DefinitionsImportOptions {
    aliases?: Record<string, ObjectType | any>;
    functions?: Record<string, FunctionType | any>;
    storage?: Record<string, TypeStorageOptions>;
    relations?: Record<string, RelationOptions>;
}
export interface DefinitionsOptions extends DefinitionsImportOptions {
    types?: TypeClass[];
    expressions?: ExpressionClass[];
}
export declare class Definitions {
    types: Record<string, TypeClass>;
    typeList: TypeClass[];
    describers: TypeClass[];
    parsers: Record<string, TypeParser>;
    expressions: Record<string, ExpressionClass>;
    operations: Operations;
    computeds: Computeds;
    aliased: Record<string, ObjectType>;
    functions: Record<string, FunctionType>;
    storage: Record<string, TypeStorage>;
    relations: Record<string, Relation>;
    constructor(initial?: DefinitionsOptions);
    extend(deepCopy?: boolean, initial?: DefinitionsOptions): Definitions;
    add(options: DefinitionsOptions): void;
    describe(data: any): Type;
    maybeType<M extends Type>(type: Type, maybe: TypeClass<M>): Type<any>;
    mergeTypes(readonlyTypes: Type[]): Type | null;
    merge(type: Type, data: any): Type;
    mergeType(a: Type, b: Type): Type;
    optionalType(type: Type): OptionalType;
    requiredType(type: Type): Type;
    getTypes(type: Type): Type[];
    getReducedType(type: Type[]): Type;
    sortDescribers(): void;
    addType<T extends Type>(type: TypeClass<T>, delaySort?: boolean): void;
    findAliased(type: Type, options?: TypeCompatibleOptions): string | false;
    addAlias(alias: string, instance: ObjectType | any): this;
    addStorage(storage: TypeStorage | TypeStorageOptions): this;
    addRelation(relation: Relation | RelationOptions): this;
    getRelations(name: string): TypeRelation[];
    getTypeProps(name: string): TypeProps[];
    renameProp(name: string, prop: string, newProp: string): void;
    rename(name: string, newName: string): boolean;
    removeProp(name: string, prop: string): void;
    removeType(name: string): void;
    cloneType(type: Type): Type<any>;
    getType(value: any, otherwise?: Type): Type;
    getBaseTypes(): Type[];
    getSimpleTypes(): Type[];
    getComplexTypes(): Type[];
    getSimpleTypeClasses(): TypeClass[];
    getComplexTypeClasses(): TypeClass[];
    addFunction(name: string, returnType: TypeInput, params: TypeInputMap, expr: any): FunctionType;
    setFunction(name: string, typeValue: any): FunctionType;
    getFunction(name: string): FunctionType;
    getComputed(id: string): Computed | null;
    getComputedReturnType(id: string, valueType?: Type | null): Type | null;
    getComputedsFor(valueType: Type): Computed[];
    hasComputed(valueType: Type, id: string): boolean;
    getOperation(id: string): OperationGeneric | null;
    getOperationTypes(id: string): OperationTypes<any, any, any> | null;
    getOperationReturnType(id: string, params: ExpressionMap, scopeAlias: Record<string, string>, context: Type): Type | null;
    getOperationExpectedTypes(id: string, params: ExpressionMap, scopeAlias: Record<string, string>, context: Type, rawTypes?: boolean): TypeMap;
    getOperationParamTypes(id: string, params: ExpressionMap, scopeAlias: Record<string, string>, context: Type, rawTypes?: boolean): TypeMap;
    getOperationScopeContext(id: string, types: TypeMap, scopeAlias: Record<string, string>, context: Type): Type;
    getContextWithScope(original: Type, scope?: TypeMap): {
        context: ManyType | ObjectType<{
            props: any;
        }>;
        scope: Record<string, Type<any>>;
    };
    getContext(original: Type, scope: TypeMap): ManyType | ObjectType<{
        props: any;
    }>;
    getOperationMapping(fromId: string, fromParamTypes: TypeMap, toId: string): OperationMapping | null;
    getOperationInputType(input: OperationTypeInput<any>): Type | null;
    getOperationInputType(input: OperationTypeInput<any>, params: TypeMap): Type;
    getOperationsForExpression(expr: Expression, context: Type): OperationPair[];
    getOperationsWithMapping(fromId: string, fromParamTypes: TypeMap): OperationMapping[];
    getOperationsForType(type: Type, acceptsDynamic?: boolean): OperationPair[];
    getOperationsWithReturnExpression(expr: Expression, context: Type, paramTypes?: TypeMap, acceptsDynamic?: boolean): OperationPair[];
    getOperationsWithReturnType(type: Type, paramTypes?: TypeMap, acceptsDynamic?: boolean): OperationPair[];
    getOperationsForParamExpressions(params: ExpressionMap, context: Type): OperationPair[];
    getOperationsForParamTypes(paramTypes: TypeMap): OperationPair[];
    getOperations(onOperation?: <P extends string, O extends string, S extends string>(pair: OperationPair<P, O, S>) => boolean): OperationPair[];
    getPathType(path: Expression[], context: Type, stopBefore?: number): Type | null;
    addExpression<T extends Expression>(expr: ExpressionClass<T>): void;
    cloneExpression(expr: Expression): Expression;
    getExpression(value: any): Expression;
    export(): DefinitionsImportOptions;
    import(exported: DefinitionsImportOptions): void;
}
