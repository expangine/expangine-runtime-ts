import { Operations } from '../Operation';
import { Computeds } from '../Computed';
export declare const ListOperations: Operations;
export declare const ListComputeds: Computeds;
export declare const ListOps: {
    create: import("../Operation").OperationResolved<never, never, never, never, never>;
    createLike: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    createFor: import("../Operation").OperationResolved<"item", any, any, any, "item">;
    maybe: import("../Operation").OperationResolved<"value", never, never, never, never>;
    build: import("../Operation").OperationResolved<"count" | "item", "sameItem", "list" | "index" | "count" | "last", "item", "item">;
    get: import("../Operation").OperationResolved<"list" | "index", any, any, any, "list">;
    set: import("../Operation").OperationResolved<"list" | "value" | "index", any, any, any, "list">;
    add: import("../Operation").OperationResolved<"list" | "item", any, any, any, "list">;
    addFirst: import("../Operation").OperationResolved<"list" | "item", any, any, any, "list">;
    addLast: import("../Operation").OperationResolved<"list" | "item", any, any, any, "list">;
    insert: import("../Operation").OperationResolved<"list" | "index" | "item", any, any, any, "list">;
    remove: import("../Operation").OperationResolved<"list" | "isEqual" | "item", any, "list" | "value" | "test", "isEqual", "list">;
    removeFirst: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    removeLast: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    removeAt: import("../Operation").OperationResolved<"list" | "index", any, any, any, "list">;
    removeWhere: import("../Operation").OperationResolved<"list" | "where", any, "list" | "index" | "item", "where", "list">;
    clear: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    contains: import("../Operation").OperationResolved<"list" | "isEqual" | "item", any, "list" | "value" | "test", "isEqual", never>;
    find: import("../Operation").OperationResolved<"list" | "where", "reverse" | "start", "list" | "index" | "item", "where", "list">;
    copy: import("../Operation").OperationResolved<"list", "deepCopy", "copy", "deepCopy", "list">;
    reverse: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    exclude: import("../Operation").OperationResolved<"list" | "isEqual" | "exclude", any, "list" | "value" | "test", "isEqual", "list">;
    overlap: import("../Operation").OperationResolved<"list" | "isEqual" | "overlap", any, "list" | "value" | "test", "isEqual", "list">;
    sort: import("../Operation").OperationResolved<"list" | "compare", any, "list" | "value" | "test", "compare", "list">;
    shuffle: import("../Operation").OperationResolved<"list", "times", any, any, "list">;
    unique: import("../Operation").OperationResolved<"list" | "isEqual", any, "list" | "value" | "test", "isEqual", "list">;
    duplicates: import("../Operation").OperationResolved<"list" | "isEqual", "once", "list" | "value" | "test", "isEqual", "list">;
    take: import("../Operation").OperationResolved<"list" | "count", any, any, any, "list">;
    skip: import("../Operation").OperationResolved<"list" | "count", any, any, any, "list">;
    drop: import("../Operation").OperationResolved<"list" | "count", any, any, any, "list">;
    append: import("../Operation").OperationResolved<"list" | "append", any, any, any, "list">;
    prepend: import("../Operation").OperationResolved<"list" | "prepend", any, any, any, "list">;
    indexOf: import("../Operation").OperationResolved<"list" | "isEqual" | "item", "start", "list" | "value" | "test", "isEqual", "list">;
    lastIndexOf: import("../Operation").OperationResolved<"list" | "isEqual" | "item", "start", "list" | "value" | "test", "isEqual", "list">;
    findIndex: import("../Operation").OperationResolved<"list" | "where", "reverse" | "start", "list" | "index" | "item", "where", never>;
    last: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    first: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    count: import("../Operation").OperationResolved<"list", never, never, never, never>;
    randomList: import("../Operation").OperationResolved<"list" | "count", any, any, any, "list">;
    random: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    flatten: import("../Operation").OperationResolved<"list", any, any, any, "list">;
    join: import("../Operation").OperationResolved<"list", "toText" | "prefix" | "suffix" | "delimiter", "list" | "index" | "item", "toText", never>;
    each: import("../Operation").OperationResolved<"list" | "each", "reverse", "list" | "index" | "item", "each", "list">;
    filter: import("../Operation").OperationResolved<"list" | "filter", any, "list" | "index" | "item", "filter", "list">;
    not: import("../Operation").OperationResolved<"list" | "not", any, "list" | "index" | "item", "not", "list">;
    map: import("../Operation").OperationResolved<"list" | "transform", any, "list" | "index" | "item", "transform", "list">;
    split: import("../Operation").OperationResolved<"list" | "pass", any, "list" | "index" | "item", "pass", "list">;
    reduce: import("../Operation").OperationResolved<"list" | "reduce" | "initial", any, "list" | "index" | "item" | "reduced", "reduce", "reduce">;
    cmp: import("../Operation").OperationResolved<"value" | "test" | "compare", any, "list" | "value" | "test", "compare", never>;
    group: import("../Operation").OperationResolved<"list" | "by", "getValue", "list" | "index" | "item", "by" | "getValue", "list" | "by" | "getValue">;
    toListMap: import("../Operation").OperationResolved<"list" | "getKey", "getValue", "list" | "index" | "item", "getValue" | "getKey", "list" | "getValue" | "getKey">;
    toMap: import("../Operation").OperationResolved<"list" | "getKey", "getValue", "list" | "index" | "item", "getValue" | "getKey", "list" | "getValue" | "getKey">;
    joinInner: import("../Operation").OperationResolved<"join" | "b" | "a" | "on", any, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinLeft: import("../Operation").OperationResolved<"join" | "b" | "a" | "on", any, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinRight: import("../Operation").OperationResolved<"join" | "b" | "a" | "on", any, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinFull: import("../Operation").OperationResolved<"join" | "b" | "a" | "on", any, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinCross: import("../Operation").OperationResolved<"join" | "b" | "a", any, "joinA" | "joinB", "join", "join">;
    min: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    max: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    sum: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    avg: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    std: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    variance: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    median: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    bitand: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    bitor: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    bitxor: import("../Operation").OperationResolved<"list" | "value", any, "list" | "index" | "item", "value", never>;
    isValid: import("../Operation").OperationResolved<"value", never, never, never, never>;
    isEmpty: import("../Operation").OperationResolved<"list", never, never, never, never>;
    isNotEmpty: import("../Operation").OperationResolved<"list", never, never, never, never>;
    isEqual: import("../Operation").OperationResolved<"list" | "test" | "isEqual", any, "list" | "value" | "test", "isEqual", never>;
    isNotEqual: import("../Operation").OperationResolved<"list" | "test" | "isEqual", any, "list" | "value" | "test", "isEqual", never>;
    isLess: import("../Operation").OperationResolved<"value" | "test" | "compare", any, "list" | "value" | "test", "compare", never>;
    isLessOrEqual: import("../Operation").OperationResolved<"value" | "test" | "compare", any, "list" | "value" | "test", "compare", never>;
    isGreater: import("../Operation").OperationResolved<"value" | "test" | "compare", any, "list" | "value" | "test", "compare", never>;
    isGreaterOrEqual: import("../Operation").OperationResolved<"value" | "test" | "compare", any, "list" | "value" | "test", "compare", never>;
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
