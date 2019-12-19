import { Operations } from '../Operation';
import { Computeds } from '../Computed';
export declare const TupleOperations: Operations;
export declare const TupleComputeds: Computeds;
export declare const TupleOps: {
    create: import("../Operation").Operation<never, never, never, never, never>;
    maybe: import("../Operation").Operation<"value", never, never, never, never>;
    cmp: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    copy: import("../Operation").Operation<"value", never, never, never, never>;
    build: import("../Operation").Operation<"a" | "b", "c" | "d" | "e", never, never, "a" | "b" | "c" | "d" | "e">;
    get: import("../Operation").Operation<"value" | "index", never, never, never, never>;
    set: import("../Operation").Operation<"value" | "index" | "element", never, never, never, never>;
    isValid: import("../Operation").Operation<"value", never, never, never, never>;
    isEqual: import("../Operation").Operation<"value" | "test", never, never, never, never>;
    isNotEqual: import("../Operation").Operation<"value" | "test", never, never, never, never>;
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
    asSet: import("../Operation").Operation<"value", never, never, never, never>;
};
