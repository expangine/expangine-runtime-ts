import { Operations } from '../Operation';
import { Computeds } from '../Computed';
export declare const MapOperations: Operations;
export declare const MapComputeds: Computeds;
export declare const MapOps: {
    create: import("../Operation").Operation<never, never, never, never, never>;
    maybe: import("../Operation").Operation<"value", never, never, never, never>;
    get: import("../Operation").Operation<"map" | "key", never, never, never, "map">;
    set: import("../Operation").Operation<"map" | "value" | "key", never, "existingValue", "value", "map">;
    has: import("../Operation").Operation<"map" | "key", never, never, never, never>;
    delete: import("../Operation").Operation<"map" | "key", never, never, never, never>;
    keys: import("../Operation").Operation<"map", never, never, never, "map">;
    values: import("../Operation").Operation<"map", never, never, never, "map">;
    entries: import("../Operation").Operation<"map", never, never, never, "map">;
    pairs: import("../Operation").Operation<"map", never, never, never, "map">;
    clear: import("../Operation").Operation<"map", never, never, never, "map">;
    count: import("../Operation").Operation<"map", never, never, never, never>;
    cmp: import("../Operation").Operation<"value" | "test" | "compare", never, "value" | "test" | "key", "compare", never>;
    copy: import("../Operation").Operation<"map", "deepCopy" | "deepCopyKey", "map" | "value" | "key", "deepCopy" | "deepCopyKey", "map">;
    map: import("../Operation").Operation<"map", "transform" | "transformKey", "map" | "value" | "key", "transform" | "transformKey", "map">;
    toPlainObject: import("../Operation").Operation<"map", never, never, never, never>;
    isValid: import("../Operation").Operation<"value", never, never, never, never>;
    isEqual: import("../Operation").Operation<"value" | "test" | "isEqual", never, "value" | "test" | "key", "isEqual", never>;
    isNotEqual: import("../Operation").Operation<"value" | "test" | "isEqual", never, "value" | "test" | "key", "isEqual", never>;
    isLess: import("../Operation").Operation<"value" | "test" | "compare", never, "value" | "test" | "key", "compare", never>;
    isLessOrEqual: import("../Operation").Operation<"value" | "test" | "compare", never, "value" | "test" | "key", "compare", never>;
    isGreater: import("../Operation").Operation<"value" | "test" | "compare", never, "value" | "test" | "key", "compare", never>;
    isGreaterOrEqual: import("../Operation").Operation<"value" | "test" | "compare", never, "value" | "test" | "key", "compare", never>;
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
