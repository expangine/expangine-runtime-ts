import { Expression, ExpressionValue, ExpressionMap } from './Expression';
export declare type RecordKey = string | number | symbol;
export declare function isNumber(value: any): value is number;
export declare function isString(value: any): value is string;
export declare function isArray<T = any>(value: any): value is T[];
export declare function isDate(value: any): value is Date;
export declare function isMap<K, V>(value: any): value is Map<K, V>;
export declare function isSet<V>(value: any): value is Set<V>;
export declare function isBoolean(value: any): value is boolean;
export declare function isFunction(value: any): value is ((...args: any[]) => any);
export declare function isObject(value: any): value is any;
export declare function isUndefined(value: any): value is undefined;
export declare function isSameClass(a: any, b: any): boolean;
export declare function isWhole(x: number, epsilon?: number): boolean;
export declare function isEmpty(value: any): boolean;
export declare function clamp(x: number, min: number, max: number): number;
export declare function toExpr(values: ExpressionValue[]): Expression[];
export declare function toExpr(values: Record<string, ExpressionValue>): ExpressionMap;
export declare function toExpr(value: ExpressionValue): Expression;
export declare function objectMap<R, V, K extends RecordKey = string, J extends RecordKey = K>(map: Record<K, V>, getValue: (value: V, key: K) => R, getKey?: (key: K, value: V) => J): Record<J, R>;
export declare function objectEach<V, K extends RecordKey = string>(map: Record<K, V>, onEach: (value: V, key: K, map: Record<K, V>) => any): void;
export declare function objectValues<V, M = V, K extends RecordKey = string>(map: Record<K, V>, transform?: (value: V, key: K) => M): M[];
export declare function objectReduce<R, V, K extends RecordKey = string>(map: Record<K, V>, reduce: (value: V, key: K, reduced: R) => R, initial: R): R;
export declare function getCompare(less: number, more: number): number;
export declare function coalesce<T>(x?: T, y?: T): T;
export declare const COMPARE_TYPE_ORDER: {
    'boolean': number;
    'number': number;
    'bigint': number;
    'string': number;
    'symbol': number;
    'object': number;
    'undefined': number;
    'function': number;
};
export declare function compare(a: any, b: any): number;
export interface Copier {
    priority: number;
    tryCopy(x: any, copyAny: (x: any, copied: Map<any, any>) => any, copied: Map<any, any>): any;
}
export declare const copiers: Copier[];
export declare function addCopier(priority: number, tryCopy: Copier['tryCopy']): void;
export declare function copy(x: any, copied?: Map<any, any>): any;
export declare function padNumber(x: number, length: number, first?: number): string;
export declare function pad(x: string, length: number, padding: string, before: boolean): string;
export declare function toString(x: any): string;
