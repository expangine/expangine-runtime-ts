import { Operations } from '../Operation';
export declare const ColorOperations: Operations;
export declare const ColorOps: {
    create: import("../Operation").Operation<never, never, never, never, never>;
    maybe: import("../Operation").Operation<"value", never, never, never, never>;
    cmp: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    copy: import("../Operation").Operation<"value", never, never, never, never>;
    build: import("../Operation").Operation<"b" | "r" | "g", "a", never, never, never>;
    map: import("../Operation").Operation<"value" | "b" | "r" | "g", "a", "value" | "component", "a" | "b" | "r" | "g", never>;
    op: import("../Operation").Operation<"value" | "b" | "test" | "r" | "g", "a", "value" | "test" | "component", "a" | "b" | "r" | "g", never>;
    clamp: import("../Operation").Operation<"value", never, never, never, never>;
    add: import("../Operation").Operation<"value" | "addend", "alpha", never, never, never>;
    adds: import("../Operation").Operation<"value" | "addend" | "addendScale", "alpha", never, never, never>;
    sub: import("../Operation").Operation<"value" | "subtrahend", "alpha", never, never, never>;
    mul: import("../Operation").Operation<"value" | "multiplier", "alpha", never, never, never>;
    div: import("../Operation").Operation<"value" | "divisor", "alpha", never, never, never>;
    mod: import("../Operation").Operation<"value" | "divisor", "alpha", never, never, never>;
    format: import("../Operation").Operation<"value" | "format", never, never, never, never>;
    parse: import("../Operation").Operation<"value", never, never, never, never>;
    lerp: import("../Operation").Operation<"start" | "end" | "delta", never, never, never, never>;
    lighten: import("../Operation").Operation<"value" | "amount", never, never, never, never>;
    darken: import("../Operation").Operation<"value" | "amount", never, never, never, never>;
    toHSL: import("../Operation").Operation<"value", never, never, never, never>;
    fromHSL: import("../Operation").Operation<"value", never, never, never, never>;
    luminance: import("../Operation").Operation<"value", never, never, never, never>;
    contrast: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    invert: import("../Operation").Operation<"value", "alpha", never, never, never>;
    opaque: import("../Operation").Operation<"value", never, never, never, never>;
    alpha: import("../Operation").Operation<"value" | "alpha", never, never, never, never>;
    distance: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    named: import("../Operation").Operation<"name", never, never, never, never>;
    getName: import("../Operation").Operation<"value", never, never, never, never>;
    blend: import("../Operation").Operation<"top" | "bottom" | "mode", never, never, never, never>;
    isValid: import("../Operation").Operation<"value", never, never, never, never>;
    isEqual: import("../Operation").Operation<"value" | "test", "epsilon", never, never, never>;
    isNotEqual: import("../Operation").Operation<"value" | "test", "epsilon", never, never, never>;
    isLess: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    isLessOrEqual: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    isGreater: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    isGreaterOrEqual: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    asAny: import("../Operation").Operation<"value", never, never, never, never>;
    asBoolean: import("../Operation").Operation<"value", never, never, never, never>;
    asColor: import("../Operation").Operation<"value", never, never, never, never>;
    asDate: import("../Operation").Operation<"value", never, never, never, never>;
    asList: import("../Operation").Operation<"value", never, never, never, never>;
    asMap: import("../Operation").Operation<"value", never, never, never, never>;
    asNumber: import("../Operation").Operation<"value", never, never, never, never>;
    asObject: import("../Operation").Operation<"value", never, never, never, never>;
    asText: import("../Operation").Operation<"value", never, never, never, never>;
    asTuple: import("../Operation").Operation<"value", never, never, never, never>;
};
