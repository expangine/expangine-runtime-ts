export declare const MapOpsTypes: {
    create: import("../..").OperationTypes<never, never, never>;
    createLike: import("../..").OperationTypes<"map", never, never>;
    createFor: import("../..").OperationTypes<"value", "key", never>;
    maybe: import("../..").OperationTypes<"value", never, never>;
    get: import("../..").OperationTypes<"map" | "key", never, never>;
    set: import("../..").OperationTypes<"map" | "key" | "value", never, "existingValue">;
    has: import("../..").OperationTypes<"map" | "key", never, never>;
    delete: import("../..").OperationTypes<"map" | "key", never, never>;
    keys: import("../..").OperationTypes<"map", never, never>;
    values: import("../..").OperationTypes<"map", never, never>;
    entries: import("../..").OperationTypes<"map", never, never>;
    pairs: import("../..").OperationTypes<"map", never, never>;
    clear: import("../..").OperationTypes<"map", never, never>;
    count: import("../..").OperationTypes<"map", never, never>;
    cmp: import("../..").OperationTypes<"value" | "test" | "compare", never, "key" | "value" | "test">;
    copy: import("../..").OperationTypes<"map", "deepCopy" | "deepCopyKey", "map" | "key" | "value">;
    map: import("../..").OperationTypes<"map", "transform" | "transformKey", "map" | "key" | "value">;
    toPlainObject: import("../..").OperationTypes<"map", never, never>;
    fromPlainObject: import("../..").OperationTypes<"object", never, never>;
    isValid: import("../..").OperationTypes<"value", never, never>;
    isEqual: import("../..").OperationTypes<"value" | "test" | "isEqual", never, "key" | "value" | "test">;
    isNotEqual: import("../..").OperationTypes<"value" | "test" | "isEqual", never, "key" | "value" | "test">;
    isLess: import("../..").OperationTypes<"value" | "test" | "compare", never, "key" | "value" | "test">;
    isLessOrEqual: import("../..").OperationTypes<"value" | "test" | "compare", never, "key" | "value" | "test">;
    isGreater: import("../..").OperationTypes<"value" | "test" | "compare", never, "key" | "value" | "test">;
    isGreaterOrEqual: import("../..").OperationTypes<"value" | "test" | "compare", never, "key" | "value" | "test">;
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
