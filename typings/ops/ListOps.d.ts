import { Operations } from '../Operation';
import { Computeds } from '../Computed';
export declare const ListOperations: Operations;
export declare const ListComputeds: Computeds;
export declare const ListOps: {
    create: import("../Operation").Operation<never, never, never, never, never>;
    maybe: import("../Operation").Operation<"value", never, never, never, never>;
    build: import("../Operation").Operation<"count" | "item", "sameItem", "list" | "count" | "index" | "last", "item", "item">;
    get: import("../Operation").Operation<"list" | "index", never, never, never, "list">;
    set: import("../Operation").Operation<"list" | "value" | "index", never, never, never, "list">;
    add: import("../Operation").Operation<"list" | "item", never, never, never, "list">;
    addFirst: import("../Operation").Operation<"list" | "item", never, never, never, "list">;
    addLast: import("../Operation").Operation<"list" | "item", never, never, never, "list">;
    insert: import("../Operation").Operation<"list" | "item" | "index", never, never, never, "list">;
    remove: import("../Operation").Operation<"list" | "isEqual" | "item", never, "list" | "value" | "test", "isEqual", "list">;
    removeFirst: import("../Operation").Operation<"list", never, never, never, "list">;
    removeLast: import("../Operation").Operation<"list", never, never, never, "list">;
    removeAt: import("../Operation").Operation<"list" | "index", never, never, never, "list">;
    removeWhere: import("../Operation").Operation<"list" | "where", never, "list" | "item" | "index", "where", "list">;
    contains: import("../Operation").Operation<"list" | "isEqual" | "item", never, "list" | "value" | "test", "isEqual", never>;
    find: import("../Operation").Operation<"list" | "where", "start" | "reverse", "list" | "item" | "index", "where", "list">;
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
    indexOf: import("../Operation").Operation<"list" | "isEqual" | "item", "start", "list" | "value" | "test", "isEqual", "list">;
    lastIndexOf: import("../Operation").Operation<"list" | "isEqual" | "item", "start", "list" | "value" | "test", "isEqual", "list">;
    findIndex: import("../Operation").Operation<"list" | "where", "start" | "reverse", "list" | "item" | "index", "where", never>;
    last: import("../Operation").Operation<"list", never, never, never, "list">;
    first: import("../Operation").Operation<"list", never, never, never, "list">;
    count: import("../Operation").Operation<"list", never, never, never, never>;
    randomList: import("../Operation").Operation<"list" | "count", never, never, never, "list">;
    random: import("../Operation").Operation<"list", never, never, never, "list">;
    join: import("../Operation").Operation<"list", "toText" | "prefix" | "suffix" | "delimiter", "list" | "item" | "index", "toText", never>;
    each: import("../Operation").Operation<"list" | "each", "reverse", "list" | "item" | "index", "each", "list">;
    filter: import("../Operation").Operation<"list" | "filter", never, "list" | "item" | "index", "filter", "list">;
    not: import("../Operation").Operation<"list" | "not", never, "list" | "item" | "index", "not", "list">;
    map: import("../Operation").Operation<"list" | "transform", never, "list" | "item" | "index", "transform", "list">;
    split: import("../Operation").Operation<"list" | "pass", never, "list" | "item" | "index", "pass", "list">;
    reduce: import("../Operation").Operation<"list" | "reduce" | "initial", never, "list" | "item" | "index" | "reduced", "reduce", "reduce">;
    cmp: import("../Operation").Operation<"value" | "test" | "compare", never, "list" | "value" | "test", "compare", never>;
    group: import("../Operation").Operation<"list" | "by", "getValue", "list" | "item" | "index", "by" | "getValue", "list" | "by" | "getValue">;
    toListMap: import("../Operation").Operation<"list" | "getKey", "getValue", "list" | "item" | "index", "getValue" | "getKey", "list" | "getValue" | "getKey">;
    toMap: import("../Operation").Operation<"list" | "getKey", "getValue", "list" | "item" | "index", "getValue" | "getKey", "list" | "getValue" | "getKey">;
    joinInner: import("../Operation").Operation<"a" | "b" | "join" | "on", never, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinLeft: import("../Operation").Operation<"a" | "b" | "join" | "on", never, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinRight: import("../Operation").Operation<"a" | "b" | "join" | "on", never, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinFull: import("../Operation").Operation<"a" | "b" | "join" | "on", never, "onA" | "onB" | "joinA" | "joinB", "join" | "on", "join">;
    joinCross: import("../Operation").Operation<"a" | "b" | "join", never, "joinA" | "joinB", "join", "join">;
    min: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    max: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    sum: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    avg: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    std: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    variance: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    median: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    bitand: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    bitor: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
    bitxor: import("../Operation").Operation<"list" | "value", never, "list" | "item" | "index", "value", never>;
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
