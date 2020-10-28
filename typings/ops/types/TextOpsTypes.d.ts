export declare const TextOpsTypes: {
    create: import("../..").OperationTypes<never, never, never>;
    uuid: import("../..").OperationTypes<never, never, never>;
    maybe: import("../..").OperationTypes<"value", never, never>;
    append: import("../..").OperationTypes<"value" | "append", never, never>;
    prepend: import("../..").OperationTypes<"value" | "prepend", never, never>;
    lower: import("../..").OperationTypes<"value", never, never>;
    upper: import("../..").OperationTypes<"value", never, never>;
    char: import("../..").OperationTypes<"value" | "index", "outside", never>;
    replace: import("../..").OperationTypes<"replace" | "find" | "value", never, never>;
    repeat: import("../..").OperationTypes<"value" | "times", never, never>;
    split: import("../..").OperationTypes<"value" | "by", "limit", never>;
    chars: import("../..").OperationTypes<"value", never, never>;
    sub: import("../..").OperationTypes<"value", "end" | "start", never>;
    indexOf: import("../..").OperationTypes<"search" | "value", "start", never>;
    lastIndexOf: import("../..").OperationTypes<"search" | "value", "start", never>;
    trim: import("../..").OperationTypes<"value", "end" | "start", never>;
    startsWith: import("../..").OperationTypes<"value" | "test", never, never>;
    endsWith: import("../..").OperationTypes<"value" | "test", never, never>;
    soundex: import("../..").OperationTypes<"value", "max" | "min", never>;
    metaphone: import("../..").OperationTypes<"value", never, never>;
    distance: import("../..").OperationTypes<"value" | "test", never, never>;
    length: import("../..").OperationTypes<"value", never, never>;
    compare: import("../..").OperationTypes<"value" | "test", "ignoreCase", never>;
    like: import("../..").OperationTypes<"value" | "pattern", "ignoreCase", never>;
    pad: import("../..").OperationTypes<"value" | "min" | "padding", "append" | "max", never>;
    regexTest: import("../..").OperationTypes<"value" | "regex", "ignoreCase" | "multiline", never>;
    regexSplit: import("../..").OperationTypes<"value" | "regex", "limit" | "ignoreCase" | "multiline", never>;
    regexMatch: import("../..").OperationTypes<"value" | "regex", "ignoreCase" | "multiline", never>;
    regexMatchAll: import("../..").OperationTypes<"value" | "regex", "ignoreCase" | "multiline", never>;
    regexReplace: import("../..").OperationTypes<"value" | "regex" | "replacement", "ignoreCase" | "multiline" | "all", never>;
    regexReplaceDynamic: import("../..").OperationTypes<"replace" | "value" | "regex", "ignoreCase" | "multiline" | "all", "match">;
    regexIndexOf: import("../..").OperationTypes<"value" | "regex", "ignoreCase" | "multiline", never>;
    base64: import("../..").OperationTypes<"value", never, never>;
    unbase64: import("../..").OperationTypes<"value", never, never>;
    encodeURI: import("../..").OperationTypes<"value", never, never>;
    decodeURI: import("../..").OperationTypes<"value", never, never>;
    encodeURIComponent: import("../..").OperationTypes<"value", never, never>;
    decodeURIComponent: import("../..").OperationTypes<"value", never, never>;
    md5: import("../..").OperationTypes<"value", never, never>;
    encrypt: import("../..").OperationTypes<"value" | "secret", never, never>;
    decrypt: import("../..").OperationTypes<"value" | "secret", never, never>;
    toNumber: import("../..").OperationTypes<"value", "invalidValue", never>;
    isValid: import("../..").OperationTypes<"value", never, never>;
    isEmpty: import("../..").OperationTypes<"value", never, never>;
    isNotEmpty: import("../..").OperationTypes<"value", never, never>;
    isEqual: import("../..").OperationTypes<"b" | "a", "ignoreCase", never>;
    isNotEqual: import("../..").OperationTypes<"b" | "a", "ignoreCase", never>;
    isLess: import("../..").OperationTypes<"value" | "test", "ignoreCase", never>;
    isLessOrEqual: import("../..").OperationTypes<"value" | "test", "ignoreCase", never>;
    isGreater: import("../..").OperationTypes<"value" | "test", "ignoreCase", never>;
    isGreaterOrEqual: import("../..").OperationTypes<"value" | "test", "ignoreCase", never>;
    isLower: import("../..").OperationTypes<"value", never, never>;
    isUpper: import("../..").OperationTypes<"value", never, never>;
    isUuid: import("../..").OperationTypes<"value", never, never>;
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
