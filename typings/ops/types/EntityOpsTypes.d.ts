export declare const EntityOpsTypes: {
    newInstance: import("../../Operation").OperationTypes<"name", never, never>;
    get: import("../../Operation").OperationTypes<"name", "where", "instance">;
    getKey: import("../../Operation").OperationTypes<"name" | "instance", never, never>;
    save: import("../../Operation").OperationTypes<"name" | "instance", never, never>;
    remove: import("../../Operation").OperationTypes<"name" | "instance", never, never>;
    setRelated: import("../../Operation").OperationTypes<"name" | "relation" | "related" | "instance", never, never>;
    addRelated: import("../../Operation").OperationTypes<"name" | "relation" | "related" | "instance", never, never>;
    removeRelated: import("../../Operation").OperationTypes<"name" | "relation" | "related" | "instance", never, never>;
    clearRelated: import("../../Operation").OperationTypes<"name" | "relation" | "instance", never, never>;
    getRelated: import("../../Operation").OperationTypes<"name" | "relation" | "instance", never, never>;
    isRelated: import("../../Operation").OperationTypes<"name" | "relation" | "related" | "instance", never, never>;
};
