export declare const DateOps: {
    create: import("..").Operation<never, never, never>;
    now: import("..").Operation<never, never, never>;
    today: import("..").Operation<never, never, never>;
    tomorrow: import("..").Operation<never, never, never>;
    yesterday: import("..").Operation<never, never, never>;
    parse: import("..").Operation<"value", "parseAsUTC", never>;
    fromText: import("..").Operation<"value", "parseAsUTC", never>;
    fromTimestamp: import("..").Operation<"value", never, never>;
    fromTimestampSeconds: import("..").Operation<"value", never, never>;
    min: import("..").Operation<"value" | "test", never, never>;
    max: import("..").Operation<"value" | "test", never, never>;
    get: import("..").Operation<"value" | "property", never, never>;
    set: import("..").Operation<"value" | "property" | "set", never, never>;
    add: import("..").Operation<"value" | "unit", "amount", never>;
    sub: import("..").Operation<"value" | "unit", "amount", never>;
    startOf: import("..").Operation<"value" | "unit", never, never>;
    endOf: import("..").Operation<"value" | "unit", "inclusive", never>;
    daysInMonth: import("..").Operation<"value", never, never>;
    daysInYear: import("..").Operation<"value", never, never>;
    weeksInYear: import("..").Operation<"value", never, never>;
    copy: import("..").Operation<"value", never, never>;
    cmp: import("..").Operation<"value" | "test", "unit", never>;
    diff: import("..").Operation<"value" | "test", "unit" | "absolute" | "adjust", never>;
    timezoneOffset: import("..").Operation<"value", never, never>;
    toText: import("..").Operation<"value" | "format", never, never>;
    toISOText: import("..").Operation<"value", never, never>;
    isValid: import("..").Operation<"value", never, never>;
    isEqual: import("..").Operation<"value" | "test", "unit", never>;
    isBefore: import("..").Operation<"value" | "test", "unit", never>;
    isBeforeOrEqual: import("..").Operation<"value" | "test", "unit", never>;
    isAfter: import("..").Operation<"value" | "test", "unit", never>;
    isAfterOrEqual: import("..").Operation<"value" | "test", "unit", never>;
    isBetween: import("..").Operation<"value" | "start" | "end", "unit" | "startInclusive" | "endInclusive", never>;
    isStartOf: import("..").Operation<"value" | "unit", never, never>;
    isEndOf: import("..").Operation<"value" | "unit", "inclusive", never>;
    isDST: import("..").Operation<"value", never, never>;
    isLeapYear: import("..").Operation<"value", never, never>;
    asAny: import("..").Operation<"value", never, never>;
    asBoolean: import("..").Operation<"value", never, never>;
    asDate: import("..").Operation<"value", never, never>;
    asList: import("..").Operation<"value", never, never>;
    asMap: import("..").Operation<"value", never, never>;
    asNumber: import("..").Operation<"value", never, never>;
    asObject: import("..").Operation<"value", never, never>;
    asText: import("..").Operation<"value", never, never>;
    asTuple: import("..").Operation<"value", never, never>;
};
