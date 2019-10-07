import { Operations } from '../Operation';
export declare const ListOperations: Operations;
export declare const ListOps: {
    create: import("../Operation").Operation<never, never, never, never, never>;
    maybe: import("../Operation").Operation<"value", never, never, never, never>;
    build: import("../Operation").Operation<"count" | "item", "sameItem", "list" | "index" | "count" | "last", "item", "item">;
    get: import("../Operation").Operation<"list" | "index", never, never, never, "list">;
    set: import("../Operation").Operation<"list" | "value" | "index", never, never, never, "list">;
    add: import("../Operation").Operation<"list" | "item", never, never, never, "list">;
    addFirst: import("../Operation").Operation<"list" | "item", never, never, never, "list">;
    addLast: import("../Operation").Operation<"list" | "item", never, never, never, "list">;
    insert: import("../Operation").Operation<"list" | "index" | "item", never, never, never, "list">;
    remove: import("../Operation").Operation<"list" | "item" | "isEqual", never, "list" | "value" | "test", "isEqual", "list">;
    removeFirst: import("../Operation").Operation<"list", never, never, never, "list">;
    removeLast: import("../Operation").Operation<"list", never, never, never, "list">;
    removeAt: import("../Operation").Operation<"list" | "index", never, never, never, "list">;
    removeWhere: import("../Operation").Operation<"list" | "where", never, "list" | "index" | "item", "where", "list">;
    contains: import("../Operation").Operation<"list" | "item" | "isEqual", never, "list" | "value" | "test", "isEqual", never>;
    find: import("../Operation").Operation<"list" | "where", "start" | "reverse", "list" | "index" | "item", "where", "list">;
    copy: import("../Operation").Operation<"list", "deepCopy", "copy", "deepCopy", "list">;
    reverse: import("../Operation").Operation<"list", never, never, never, "list">;
    exclude: import("../Operation").Operation<"list" | "isEqual" | "exclude", never, "list" | "value" | "test", "isEqual", "list">;
    overlap: import("../Operation").Operation<"list" | "isEqual" | "overlap", never, "list" | "value" | "test", "isEqual", "list">;
    sort: import("../Operation").Operation<"list" | "compare", never, "list" | "value" | "test", "compare", "list">;
    shuffle: import("../Operation").Operation<"list", "times", never, never, "list">;
    unique: import("../Operation").Operation<"list" | "isEqual", never, "list" | "value" | "test", "isEqual", "list">;
    duplicates: import("../Operation").Operation<"list" | "isEqual", "once", "list" | "value" | "test", "isEqual", "list">;
    take: import("../Operation").Operation<"list" | "count", never, never, never, "list">;
    skip: import("../Operation").Operation<"list" | "count", never, never, never, "list">;
    drop: import("../Operation").Operation<"list" | "count", never, never, never, "list">;
    append: import("../Operation").Operation<"list" | "append", never, never, never, "list">;
    prepend: import("../Operation").Operation<"list" | "prepend", never, never, never, "list">;
    indexOf: import("../Operation").Operation<"list" | "item" | "isEqual", "start", "list" | "value" | "test", "isEqual", "list">;
    lastIndexOf: import("../Operation").Operation<"list" | "item" | "isEqual", "start", "list" | "value" | "test", "isEqual", "list">;
    findIndex: import("../Operation").Operation<"list" | "where", "start" | "reverse", "list" | "index" | "item", "where", "list" | "start" | "where" | "reverse">;
    last: import("../Operation").Operation<"list", never, never, never, "list">;
    first: import("../Operation").Operation<"list", never, never, never, "list">;
    count: import("../Operation").Operation<"list", never, never, never, never>;
    randomList: import("../Operation").Operation<"list" | "count", never, never, never, "list">;
    random: import("../Operation").Operation<"list", never, never, never, "list">;
    join: import("../Operation").Operation<"list", "toText" | "prefix" | "suffix" | "delimiter", "list" | "index" | "item", "toText", "list" | "toText" | "prefix" | "suffix" | "delimiter">;
    each: import("../Operation").Operation<"list" | "each", "reverse", "list" | "index" | "item", "each", "list">;
    filter: import("../Operation").Operation<"list" | "filter", never, "list" | "index" | "item", "filter", "list">;
    not: import("../Operation").Operation<"list" | "not", never, "list" | "index" | "item", "not", "list">;
    map: import("../Operation").Operation<"list" | "transform", never, "list" | "index" | "item", "transform", "list">;
    split: import("../Operation").Operation<"list" | "pass", never, "list" | "index" | "item", "pass", "list">;
    reduce: import("../Operation").Operation<"list" | "reduce" | "initial", never, "list" | "index" | "item" | "reduced", "reduce", "reduce">;
    cmp: import("../Operation").Operation<"value" | "test" | "compare", never, "list" | "value" | "test", "compare", never>;
    group: import("../Operation").Operation<"list" | "by", "getValue", "list" | "index" | "item", "by" | "getValue", "list" | "by" | "getValue">;
    toListMap: import("../Operation").Operation<"list" | "getKey", "getValue", "list" | "index" | "item", "getValue" | "getKey", "list" | "getValue" | "getKey">;
    toMap: import("../Operation").Operation<"list" | "getKey", "getValue", "list" | "index" | "item", "getValue" | "getKey", "list" | "getValue" | "getKey">;
    min: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    max: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    sum: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    avg: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    std: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    variance: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    median: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    bitand: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    bitor: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    bitxor: import("../Operation").Operation<"list" | "value", never, "list" | "index" | "item", "value", never>;
    isValid: import("../Operation").Operation<"value", never, never, never, never>;
    isEmpty: import("../Operation").Operation<"list", never, never, never, never>;
    isNotEmpty: import("../Operation").Operation<"list", never, never, never, never>;
    isEqual: import("../Operation").Operation<"list" | "test" | "isEqual", never, "list" | "value" | "test", "isEqual", never>;
    isNotEqual: import("../Operation").Operation<"list" | "test" | "isEqual", never, "list" | "value" | "test", "isEqual", never>;
    isLess: import("../Operation").Operation<"value" | "test" | "compare", never, "list" | "value" | "test", "compare", never>;
    isLessOrEqual: import("../Operation").Operation<"value" | "test" | "compare", never, "list" | "value" | "test", "compare", never>;
    isGreater: import("../Operation").Operation<"value" | "test" | "compare", never, "list" | "value" | "test", "compare", never>;
    isGreaterOrEqual: import("../Operation").Operation<"value" | "test" | "compare", never, "list" | "value" | "test", "compare", never>;
    asAny: import("../Operation").Operation<"value", never, never, never, never>;
    asBoolean: import("../Operation").Operation<"value", never, never, never, never>;
    asDate: import("../Operation").Operation<"value", never, never, never, never>;
    asList: import("../Operation").Operation<"value", never, never, never, never>;
    asMap: import("../Operation").Operation<"value", never, never, never, never>;
    asNumber: import("../Operation").Operation<"value", never, never, never, never>;
    asObject: import("../Operation").Operation<"value", never, never, never, never>;
    asText: import("../Operation").Operation<"value", never, never, never, never>;
    asTuple: import("../Operation").Operation<"value", never, never, never, never>;
};
