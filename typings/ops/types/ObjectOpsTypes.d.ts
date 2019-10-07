export declare const ObjectOpsTypes: {
    create: import("../..").OperationTypes<never, never, never>;
    maybe: import("../..").OperationTypes<"value", never, never>;
    has: import("../..").OperationTypes<"object" | "key", never, never>;
    get: import("../..").OperationTypes<"object" | "key", never, never>;
    set: import("../..").OperationTypes<"object" | "value" | "key", never, "existingValue">;
    delete: import("../..").OperationTypes<"object" | "key", never, never>;
    cmp: import("../..").OperationTypes<"value" | "test", never, never>;
    copy: import("../..").OperationTypes<"object", never, never>;
    isValid: import("../..").OperationTypes<"value", never, never>;
    isEqual: import("../..").OperationTypes<"value" | "test", never, never>;
    isNotEqual: import("../..").OperationTypes<"value" | "test", never, never>;
    isLess: import("../..").OperationTypes<"value" | "test", never, never>;
    isLessOrEqual: import("../..").OperationTypes<"value" | "test", never, never>;
    isGreater: import("../..").OperationTypes<"value" | "test", never, never>;
    isGreaterOrEqual: import("../..").OperationTypes<"value" | "test", never, never>;
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
