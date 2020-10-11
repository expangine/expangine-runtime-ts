import { Operations } from '../Operation';
import { Computeds } from '../Computed';
export declare const TextOperations: Operations;
export declare const TextComputeds: Computeds;
export declare const TextOps: {
    create: import("../Operation").OperationResolved<never, never, never, never, never>;
    uuid: import("../Operation").OperationResolved<never, never, never, never, never>;
    maybe: import("../Operation").OperationResolved<"value", never, never, never, never>;
    append: import("../Operation").OperationResolved<"value" | "append", never, never, never, never>;
    prepend: import("../Operation").OperationResolved<"value" | "prepend", never, never, never, never>;
    lower: import("../Operation").OperationResolved<"value", never, never, never, never>;
    upper: import("../Operation").OperationResolved<"value", never, never, never, never>;
    char: import("../Operation").OperationResolved<"value" | "index", "outside", never, never, never>;
    replace: import("../Operation").OperationResolved<"replace" | "value" | "find", never, never, never, never>;
    repeat: import("../Operation").OperationResolved<"value" | "times", never, never, never, never>;
    split: import("../Operation").OperationResolved<"value" | "by", "limit", never, never, never>;
    chars: import("../Operation").OperationResolved<"value", never, never, never, never>;
    sub: import("../Operation").OperationResolved<"value", "start" | "end", never, never, never>;
    indexOf: import("../Operation").OperationResolved<"search" | "value", "start", never, never, never>;
    lastIndexOf: import("../Operation").OperationResolved<"search" | "value", "start", never, never, never>;
    trim: import("../Operation").OperationResolved<"value", "start" | "end", never, never, never>;
    startsWith: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    endsWith: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    soundex: import("../Operation").OperationResolved<"value", "min" | "max", never, never, never>;
    metaphone: import("../Operation").OperationResolved<"value", never, never, never, never>;
    distance: import("../Operation").OperationResolved<"value" | "test", never, never, never, never>;
    length: import("../Operation").OperationResolved<"value", never, never, never, never>;
    compare: import("../Operation").OperationResolved<"value" | "test", "ignoreCase", never, never, never>;
    like: import("../Operation").OperationResolved<"value" | "pattern", "ignoreCase", never, never, never>;
    pad: import("../Operation").OperationResolved<"value" | "min" | "padding", "append" | "max", never, never, never>;
    regexTest: import("../Operation").OperationResolved<"value" | "regex", "ignoreCase" | "multiline", never, never, never>;
    regexSplit: import("../Operation").OperationResolved<"value" | "regex", "limit" | "ignoreCase" | "multiline", never, never, never>;
    regexMatch: import("../Operation").OperationResolved<"value" | "regex", "ignoreCase" | "multiline", never, never, never>;
    regexMatchAll: import("../Operation").OperationResolved<"value" | "regex", "ignoreCase" | "multiline", never, never, never>;
    regexReplace: import("../Operation").OperationResolved<"value" | "regex" | "replacement", "ignoreCase" | "multiline" | "all", never, never, never>;
    regexReplaceDynamic: import("../Operation").OperationResolved<"replace" | "value" | "regex", "ignoreCase" | "multiline" | "all", "match", "replace", never>;
    regexIndexOf: import("../Operation").OperationResolved<"value" | "regex", "ignoreCase" | "multiline", never, never, never>;
    base64: import("../Operation").OperationResolved<"value", never, never, never, never>;
    unbase64: import("../Operation").OperationResolved<"value", never, never, never, never>;
    encodeURI: import("../Operation").OperationResolved<"value", never, never, never, never>;
    decodeURI: import("../Operation").OperationResolved<"value", never, never, never, never>;
    encodeURIComponent: import("../Operation").OperationResolved<"value", never, never, never, never>;
    decodeURIComponent: import("../Operation").OperationResolved<"value", never, never, never, never>;
    md5: import("../Operation").OperationResolved<"value", never, never, never, never>;
    encrypt: import("../Operation").OperationResolved<"value" | "secret", never, never, never, never>;
    decrypt: import("../Operation").OperationResolved<"value" | "secret", never, never, never, never>;
    toNumber: import("../Operation").OperationResolved<"value", "invalidValue", never, never, never>;
    isValid: import("../Operation").OperationResolved<"value", never, never, never, never>;
    isEmpty: import("../Operation").OperationResolved<"value", never, never, never, never>;
    isNotEmpty: import("../Operation").OperationResolved<"value", never, never, never, never>;
    isEqual: import("../Operation").OperationResolved<"a" | "b", "ignoreCase", never, never, never>;
    isNotEqual: import("../Operation").OperationResolved<"a" | "b", "ignoreCase", never, never, never>;
    isLess: import("../Operation").OperationResolved<"value" | "test", "ignoreCase", never, never, never>;
    isLessOrEqual: import("../Operation").OperationResolved<"value" | "test", "ignoreCase", never, never, never>;
    isGreater: import("../Operation").OperationResolved<"value" | "test", "ignoreCase", never, never, never>;
    isGreaterOrEqual: import("../Operation").OperationResolved<"value" | "test", "ignoreCase", never, never, never>;
    isLower: import("../Operation").OperationResolved<"value", never, never, never, never>;
    isUpper: import("../Operation").OperationResolved<"value", never, never, never, never>;
    isUuid: import("../Operation").OperationResolved<"value", never, never, never, never>;
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
