export declare const NumberOpsTypes: {
    create: import("../..").OperationTypes<never, never, never>;
    pi: import("../..").OperationTypes<never, never, never>;
    pi2: import("../..").OperationTypes<never, never, never>;
    piHalf: import("../..").OperationTypes<never, never, never>;
    e: import("../..").OperationTypes<never, never, never>;
    sqrt2: import("../..").OperationTypes<never, never, never>;
    sqrt12: import("../..").OperationTypes<never, never, never>;
    ln2: import("../..").OperationTypes<never, never, never>;
    ln10: import("../..").OperationTypes<never, never, never>;
    log2e: import("../..").OperationTypes<never, never, never>;
    log10e: import("../..").OperationTypes<never, never, never>;
    add: import("../..").OperationTypes<"value" | "addend", never, never>;
    sub: import("../..").OperationTypes<"value" | "subtrahend", never, never>;
    mul: import("../..").OperationTypes<"value" | "multiplier", never, never>;
    div: import("../..").OperationTypes<"value" | "divisor", never, never>;
    mod: import("../..").OperationTypes<"value" | "divisor", never, never>;
    min: import("../..").OperationTypes<"a" | "b", never, never>;
    max: import("../..").OperationTypes<"a" | "b", never, never>;
    pow: import("../..").OperationTypes<"value" | "exponent", never, never>;
    atan2: import("../..").OperationTypes<"x" | "y", never, never>;
    hypot: import("../..").OperationTypes<"a" | "b", never, never>;
    choose: import("../..").OperationTypes<"k" | "n", never, never>;
    gcd: import("../..").OperationTypes<"a" | "b", never, never>;
    bitAnd: import("../..").OperationTypes<"a" | "b", never, never>;
    bitOr: import("../..").OperationTypes<"a" | "b", never, never>;
    bitXor: import("../..").OperationTypes<"a" | "b", never, never>;
    cmp: import("../..").OperationTypes<"value" | "test", never, never>;
    maybe: import("../..").OperationTypes<"value", never, never>;
    sqrt: import("../..").OperationTypes<"value", never, never>;
    sq: import("../..").OperationTypes<"value", never, never>;
    cbrt: import("../..").OperationTypes<"value", never, never>;
    floor: import("../..").OperationTypes<"value", never, never>;
    ceil: import("../..").OperationTypes<"value", never, never>;
    up: import("../..").OperationTypes<"value", never, never>;
    down: import("../..").OperationTypes<"value", never, never>;
    round: import("../..").OperationTypes<"value", never, never>;
    abs: import("../..").OperationTypes<"value", never, never>;
    neg: import("../..").OperationTypes<"value", never, never>;
    sign: import("../..").OperationTypes<"value", never, never>;
    log: import("../..").OperationTypes<"value", never, never>;
    sin: import("../..").OperationTypes<"value", never, never>;
    cos: import("../..").OperationTypes<"value", never, never>;
    tan: import("../..").OperationTypes<"value", never, never>;
    sinh: import("../..").OperationTypes<"value", never, never>;
    cosh: import("../..").OperationTypes<"value", never, never>;
    asin: import("../..").OperationTypes<"value", never, never>;
    acos: import("../..").OperationTypes<"value", never, never>;
    atan: import("../..").OperationTypes<"value", never, never>;
    factorial: import("../..").OperationTypes<"value", never, never>;
    bitFlip: import("../..").OperationTypes<"value", never, never>;
    clamp: import("../..").OperationTypes<"value" | "min" | "max", never, never>;
    triangleHeight: import("../..").OperationTypes<"base" | "side1" | "side2", never, never>;
    lerp: import("../..").OperationTypes<"start" | "end" | "delta", never, never>;
    rnd: import("../..").OperationTypes<never, "min" | "max" | "whole" | "includeMax", never>;
    toBaseText: import("../..").OperationTypes<"value", "base" | "minDigits", never>;
    toText: import("../..").OperationTypes<"value", "prefix" | "suffix" | "minPlaces" | "maxPlaces" | "useExponent" | "thousandSeparator", never>;
    isValid: import("../..").OperationTypes<"value", never, never>;
    isZero: import("../..").OperationTypes<"value", "epsilon", never>;
    isEqual: import("../..").OperationTypes<"value" | "test", "epsilon", never>;
    isNotEqual: import("../..").OperationTypes<"value" | "test", "epsilon", never>;
    isLess: import("../..").OperationTypes<"value" | "test", never, never>;
    isLessOrEqual: import("../..").OperationTypes<"value" | "test", never, never>;
    isGreater: import("../..").OperationTypes<"value" | "test", never, never>;
    isGreaterOrEqual: import("../..").OperationTypes<"value" | "test", never, never>;
    isBetween: import("../..").OperationTypes<"value" | "min" | "max", "minInclusive" | "maxInclusive", never>;
    isWhole: import("../..").OperationTypes<"value", "epsilon", never>;
    isDecimal: import("../..").OperationTypes<"value", "epsilon", never>;
    isPositive: import("../..").OperationTypes<"value", never, never>;
    isNegative: import("../..").OperationTypes<"value", never, never>;
    isDivisible: import("../..").OperationTypes<"value" | "by", "epsilon", never>;
    asAny: import("../..").OperationTypes<"value", never, never>;
    asBoolean: import("../..").OperationTypes<"value", never, never>;
    asDate: import("../..").OperationTypes<"value", never, never>;
    asList: import("../..").OperationTypes<"value", never, never>;
    asMap: import("../..").OperationTypes<"value", never, never>;
    asNumber: import("../..").OperationTypes<"value", never, never>;
    asObject: import("../..").OperationTypes<"value", never, never>;
    asText: import("../..").OperationTypes<"value", never, never>;
    asTuple: import("../..").OperationTypes<"value", never, never>;
};
