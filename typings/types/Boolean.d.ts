import { Type, TypeProvider, TypeDescribeProvider } from '../Type';
import { Operations } from '../Operation';
export interface BooleanOptions {
    true?: Record<string, true>;
    false?: Record<string, true>;
}
export declare class BooleanType extends Type<BooleanOptions> {
    static id: string;
    static operations: Operations<BooleanType>;
    static baseType: BooleanType;
    static decode(data: any[], types: TypeProvider): BooleanType;
    static encode(type: BooleanType): any;
    static describePriority: number;
    static describe(data: any, describer: TypeDescribeProvider): Type | null;
    getId(): string;
    merge(type: BooleanType, describer: TypeDescribeProvider): void;
    getSubTypes(): null;
    getExactType(value: any): Type;
    isCompatible(other: Type): boolean;
    isValid(value: any): boolean;
    normalize(value: any): any;
    encode(): any;
    random(rnd: (a: number, b: number, whole: boolean) => number): any;
}