import { Operations } from '../Operation';
import { Computeds } from '../Computed';
export declare const ColorOperations: Operations;
export declare const ColorComputeds: Computeds;
export declare const ColorOps: {
    create: import("../Operation").OperationResolved<never, never, never, never, never>;
    maybe: import("../Operation").OperationResolved<"value", never, never, never, never>;
    cmp: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    copy: import("../Operation").OperationResolved<"value", never, never, never, never>;
    build: import("../Operation").OperationResolved<"r" | "g" | "b", "a", never, never, never>;
    map: import("../Operation").OperationResolved<"value" | "r" | "g" | "b", "a", "value" | "component", "a" | "b" | "r" | "g", never>;
    op: import("../Operation").OperationResolved<"value" | "r" | "g" | "b" | "test", "a", "value" | "test" | "component", "a" | "b" | "r" | "g", never>;
    clamp: import("../Operation").OperationResolved<"value", never, never, never, never>;
    add: import("../Operation").OperationResolved<"value" | "addend", "alpha", never, never, never>;
    adds: import("../Operation").OperationResolved<"value" | "addend" | "addendScale", "alpha", never, never, never>;
    sub: import("../Operation").OperationResolved<"value" | "subtrahend", "alpha", never, never, never>;
    mul: import("../Operation").OperationResolved<"value" | "multiplier", "alpha", never, never, never>;
    div: import("../Operation").OperationResolved<"value" | "divisor", "alpha", never, never, never>;
    mod: import("../Operation").OperationResolved<"value" | "divisor", "alpha", never, never, never>;
    format: import("../Operation").OperationResolved<"value" | "format", never, never, never, never>;
    parse: import("../Operation").OperationResolved<"value", never, never, never, never>;
    lerp: import("../Operation").OperationResolved<"end" | "start" | "delta", never, never, never, never>;
    lighten: import("../Operation").OperationResolved<"value" | "amount", never, never, never, never>;
    darken: import("../Operation").OperationResolved<"value" | "amount", never, never, never, never>;
    toHSL: import("../Operation").OperationResolved<"value", never, never, never, never>;
    fromHSL: import("../Operation").OperationResolved<"value", never, never, never, never>;
    luminance: import("../Operation").OperationResolved<"value", never, never, never, never>;
    contrast: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    invert: import("../Operation").OperationResolved<"value", "alpha", never, never, never>;
    opaque: import("../Operation").OperationResolved<"value", never, never, never, never>;
    alpha: import("../Operation").OperationResolved<"value" | "alpha", never, never, never, never>;
    distance: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    named: import("../Operation").OperationResolved<"name", never, never, never, never>;
    getName: import("../Operation").OperationResolved<"value", never, never, never, never>;
    blend: import("../Operation").OperationResolved<"top" | "bottom" | "mode", never, never, never, never>;
    isValid: import("../Operation").OperationResolved<"value", never, never, never, never>;
    isEqual: import("../Operation").OperationResolved<"value" | "test", "epsilon", never, never, never>;
    isNotEqual: import("../Operation").OperationResolved<"value" | "test", "epsilon", never, never, never>;
    isLess: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    isLessOrEqual: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    isGreater: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    isGreaterOrEqual: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    asAny: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asBoolean: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asColor: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asDate: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asList: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asMap: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asNumber: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asObject: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asText: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asTuple: import("../Operation").OperationResolved<"value", never, never, never, never>;
    asSet: import("../Operation").OperationResolved<"value", never, never, never, never>;
};
