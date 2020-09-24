import { EnumType } from '../../types/Enum';
import { ManyType } from '../../types/Many';
export declare const ColorComponentEnum: EnumType;
export declare const ColorOrNumber: ManyType;
export declare const ColorFormats: EnumType;
export declare const ColorNames: EnumType;
export declare const ColorBlendModes: EnumType;
export declare const ColorOpsTypes: {
    create: import("../..").OperationTypes<never, never, never>;
    maybe: import("../..").OperationTypes<"value", never, never>;
    cmp: import("../..").OperationTypes<"value" | "test", never, never>;
    copy: import("../..").OperationTypes<"value", never, never>;
    build: import("../..").OperationTypes<"b" | "r" | "g", "a", never>;
    map: import("../..").OperationTypes<"value" | "b" | "r" | "g", "a", "value" | "component">;
    op: import("../..").OperationTypes<"value" | "test" | "b" | "r" | "g", "a", "value" | "test" | "component">;
    clamp: import("../..").OperationTypes<"value", never, never>;
    add: import("../..").OperationTypes<"value" | "addend", "alpha", never>;
    adds: import("../..").OperationTypes<"value" | "addend" | "addendScale", "alpha", never>;
    sub: import("../..").OperationTypes<"value" | "subtrahend", "alpha", never>;
    mul: import("../..").OperationTypes<"value" | "multiplier", "alpha", never>;
    div: import("../..").OperationTypes<"value" | "divisor", "alpha", never>;
    mod: import("../..").OperationTypes<"value" | "divisor", "alpha", never>;
    format: import("../..").OperationTypes<"value" | "format", never, never>;
    parse: import("../..").OperationTypes<"value", never, never>;
    lerp: import("../..").OperationTypes<"start" | "end" | "delta", never, never>;
    lighten: import("../..").OperationTypes<"value" | "amount", never, never>;
    darken: import("../..").OperationTypes<"value" | "amount", never, never>;
    toHSL: import("../..").OperationTypes<"value", never, never>;
    fromHSL: import("../..").OperationTypes<"value", never, never>;
    luminance: import("../..").OperationTypes<"value", never, never>;
    contrast: import("../..").OperationTypes<"value" | "test", never, never>;
    invert: import("../..").OperationTypes<"value", "alpha", never>;
    opaque: import("../..").OperationTypes<"value", never, never>;
    alpha: import("../..").OperationTypes<"value" | "alpha", never, never>;
    distance: import("../..").OperationTypes<"value" | "test", never, never>;
    named: import("../..").OperationTypes<"name", never, never>;
    getName: import("../..").OperationTypes<"value", never, never>;
    blend: import("../..").OperationTypes<"top" | "bottom" | "mode", never, never>;
    isValid: import("../..").OperationTypes<"value", never, never>;
    isEqual: import("../..").OperationTypes<"value" | "test", "epsilon", never>;
    isNotEqual: import("../..").OperationTypes<"value" | "test", "epsilon", never>;
    isLess: import("../..").OperationTypes<"value" | "test", never, never>;
    isLessOrEqual: import("../..").OperationTypes<"value" | "test", never, never>;
    isGreater: import("../..").OperationTypes<"value" | "test", never, never>;
    isGreaterOrEqual: import("../..").OperationTypes<"value" | "test", never, never>;
    asAny: import("../..").OperationTypes<"value", never, never>;
    asBoolean: import("../..").OperationTypes<"value", never, never>;
    asColor: import("../..").OperationTypes<"value", never, never>;
    asDate: import("../..").OperationTypes<"value", never, never>;
    asList: import("../..").OperationTypes<"value", never, never>;
    asMap: import("../..").OperationTypes<"value", never, never>;
    asNumber: import("../..").OperationTypes<"value", never, never>;
    asObject: import("../..").OperationTypes<"value", never, never>;
    asText: import("../..").OperationTypes<"value", never, never>;
    asTuple: import("../..").OperationTypes<"value", never, never>;
    asSet: import("../..").OperationTypes<"value", never, never>;
};
