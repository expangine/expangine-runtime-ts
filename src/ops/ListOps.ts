
import { Operations } from '../Operation';
import { Computeds } from '../Computed';
import { ID } from '../types/ID';


export const ListOperations = new Operations(ID.List + ID.Delimiter);

export const ListComputeds = new Computeds(ID.List + ID.Delimiter);

const ops = ListOperations;

export const ListOps = 
{

  // Static

  create: ops.set('create'),

  createLike: ops.set('createLike', {}, ['list'], [], [], [], ['list']),
  
  createFor: ops.set('createFor', {}, ['item'], [], [], [], ['item']),

  // Operations

  maybe: ops.set('maybe', {}, ['value']),

  build: ops.set('new', {}, ['count', 'item'], ['sameItem'], ['list', 'index', 'last', 'count'], ['item'], ['item']),

  get: ops.set('get', {}, ['list', 'index'], [], [], [], ['list']),

  set: ops.set('set', {}, ['list', 'index', 'value'], [], [], [], ['list']),

  add: ops.set('+', { mutates: ['list'] }, ['list', 'item'], [], [], [], ['list']),

  addFirst: ops.set('+f', { mutates: ['list'] }, ['list', 'item'], [], [], [], ['list']),

  addLast: ops.set('+l', { mutates: ['list'] }, ['list', 'item'], [], [], [], ['list']),

  insert: ops.set('+@', { mutates: ['list'] }, ['list', 'item', 'index'], [], [], [], ['list']),

  remove: ops.set('-', { mutates: ['list'], complexity: 1 },  ['list', 'item', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list'], true),

  removeFirst: ops.set('-f', { mutates: ['list'] }, ['list'], [], [], [], ['list']),

  removeLast: ops.set('-l', { mutates: ['list'] }, ['list'], [], [], [], ['list']),

  removeAt: ops.set('-@', { mutates: ['list'] }, ['list', 'index'], [], [], [], ['list']),

  removeWhere: ops.set('-?', { mutates: ['list'] }, ['list', 'where'], [], ['list', 'item', 'index'], ['where'], ['list']),

  clear: ops.set('clear', { mutates: ['list'] }, ['list'], [], [], [], ['list'] ),

  contains: ops.set('contains', { complexity: 1 }, ['list', 'item', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], [] as never, true),

  find: ops.set('find', { complexity: 1 }, ['list', 'where'], ['start', 'reverse'], ['list', 'item', 'index'], ['where'], ['list'], true),

  copy: ops.set('copy', { complexity: 1 }, ['list'], ['deepCopy'], ['copy'], ['deepCopy'], ['list'], true),

  reverse: ops.set('reverse', { complexity: 0.5 }, ['list'], [], [], [], ['list']),

  exclude: ops.set('exclude', { mutates: ['list'], complexity: 2 },  ['list', 'exclude', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list'], true),

  overlap: ops.set('overlap', { complexity: 2 }, ['list', 'overlap', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list'], true),

  sort: ops.set('sort', { mutates: ['list'], complexity: 1 },   ['list', 'compare'], [], ['list', 'value', 'test'], ['compare'], ['list']),

  shuffle: ops.set('shuffle', { mutates: ['list'], complexity: 1 }, ['list'], ['times'], [], [], ['list'], true),

  unique: ops.set('unique', { complexity: 2 }, ['list', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list'], true),

  duplicates: ops.set('dupes', { complexity: 2 }, ['list', 'isEqual'], ['once'], ['list', 'value', 'test'], ['isEqual'], ['list'], true),

  take: ops.set('take', {}, ['list', 'count'], [], [], [], ['list']),

  skip: ops.set('skip', {}, ['list', 'count'], [], [], [], ['list']),

  drop: ops.set('drop', {}, ['list', 'count'], [], [], [], ['list']),

  append: ops.set('append', {}, ['list', 'append'], [], [], [], ['list']),

  prepend: ops.set('prepend', {}, ['list', 'prepend'], [], [], [], ['list']),

  indexOf: ops.set('indexOf', { complexity: 1 }, ['list', 'item', 'isEqual'], ['start'], ['list', 'value', 'test'], ['isEqual'], ['list'], true),

  lastIndexOf: ops.set('lastIndexOf', { complexity: 1 }, ['list', 'item', 'isEqual'], ['start'], ['list', 'value', 'test'], ['isEqual'], ['list'], true),

  findIndex: ops.set('findIndex', { complexity: 1 }, ['list', 'where'], ['reverse', 'start'], ['list', 'item', 'index'], ['where'], [] as never, true),

  last: ops.set('last', {}, ['list'], [], [], [], ['list']),

  first: ops.set('first', {}, ['list'], [], [], [], ['list']),

  count: ops.set('count', {}, ['list']),

  randomList: ops.set('randomList', {}, ['list', 'count'], [], [], [], ['list'], true),

  random: ops.set('random', {}, ['list'], [], [], [], ['list']),

  flatten: ops.set('flatten', {}, ['list'], [], [], [], ['list'], true),

  // Iteration

  join: ops.set('join', { complexity: 1 }, ['list'], ['delimiter', 'toText', 'prefix', 'suffix'], ['list', 'item', 'index'], ['toText'], [] as never, true),

  each: ops.set('each', { complexity: 1 }, ['list', 'each'], ['reverse'], ['list', 'item', 'index'], ['each'], ['list'], true),

  filter: ops.set('filter', { complexity: 1 }, ['list', 'filter'], [], ['list', 'item', 'index'], ['filter'], ['list'], true),

  not: ops.set('not', { complexity: 1 }, ['list', 'not'], [], ['list', 'item', 'index'], ['not'], ['list'], true),

  map: ops.set('map', { complexity: 1}, ['list', 'transform'], [], ['list', 'item', 'index'], ['transform'], ['list'], true),

  split: ops.set('split', { complexity: 1}, ['list', 'pass'], [], ['list', 'item', 'index'], ['pass'], ['list'], true),

  reduce: ops.set('reduce', { complexity: 1}, ['list', 'reduce', 'initial'], [], ['list', 'item', 'index', 'reduced'], ['reduce'], ['reduce'], true),

  cmp: ops.set('cmp', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare'], [] as never, true),

  group: ops.set('group', { complexity: 1 }, ['list', 'by'], ['getValue'], ['list', 'item', 'index'], ['by', 'getValue'], ['list', 'by', 'getValue'], true),

  toListMap: ops.set('toListMap', { complexity: 1 }, ['list', 'getKey'], ['getValue'], ['list', 'item', 'index'], ['getKey', 'getValue'], ['list', 'getKey', 'getValue'], true),

  toMap: ops.set('toMap', { complexity: 1 }, ['list', 'getKey'], ['getValue'], ['list', 'item', 'index'], ['getKey', 'getValue'], ['list', 'getKey', 'getValue'], true),

  // Joins

  joinInner: ops.set('joinInner', { complexity: 2 }, ['a', 'b', 'on', 'join'], [], ['onA', 'onB', 'joinA', 'joinB'], ['on', 'join'], ['join'], true),

  joinLeft: ops.set('joinLeft', { complexity: 2 }, ['a', 'b', 'on', 'join'], [], ['onA', 'onB', 'joinA', 'joinB'], ['on', 'join'], ['join'], true),

  joinRight: ops.set('joinRight', { complexity: 2 }, ['a', 'b', 'on', 'join'], [], ['onA', 'onB', 'joinA', 'joinB'], ['on', 'join'], ['join'], true),

  joinFull: ops.set('joinFull', { complexity: 2 }, ['a', 'b', 'on', 'join'], [], ['onA', 'onB', 'joinA', 'joinB'], ['on', 'join'], ['join'], true),

  joinCross: ops.set('joinCross', { complexity: 2 }, ['a', 'b', 'join'], [], ['joinA', 'joinB'], ['join'], ['join'], true),

  // Aggregates

  min: ops.set('min', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  max: ops.set('max', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  sum: ops.set('sum', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  avg: ops.set('avg', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  std: ops.set('std', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  variance: ops.set('variance', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  median: ops.set('median', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  bitand: ops.set('band', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  bitor: ops.set('bor', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  bitxor: ops.set('bxor', { complexity: 1 }, ['list', 'value'], [], ['list', 'item', 'index'], ['value'], [] as never, true),

  // Comparisons

  isValid: ops.set('?', {}, ['value']),

  isEmpty: ops.set('0?', {}, ['list']),

  isNotEmpty: ops.set('!0', {}, ['list']),

  isEqual: ops.set('=', { complexity: 1 }, ['list', 'test', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], [] as never, true),

  isNotEqual: ops.set('!=', { complexity: 1 }, ['list', 'test', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], [] as never, true),

  isLess: ops.set('<', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare'], [] as never, true),

  isLessOrEqual: ops.set('<=', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare'], [] as never, true),

  isGreater: ops.set('>', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare'], [] as never, true),

  isGreaterOrEqual: ops.set('>=', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare'], [] as never, true),

  // Casts
  
  asAny: ops.set('~' + ID.Any, {}, ['value']),

  asBoolean: ops.set('~' + ID.Boolean, {}, ['value']),

  asColor: ops.set('~' + ID.Color, {}, ['value']),

  asDate: ops.set('~' + ID.Date, {}, ['value']),

  asList: ops.set('~' + ID.List, {}, ['value']),

  asMap: ops.set('~' + ID.Map, {}, ['value']),

  asNumber: ops.set('~' + ID.Number, {}, ['value']),

  asObject: ops.set('~' + ID.Object, {}, ['value']),

  asText: ops.set('~' + ID.Text, {}, ['value']),

  asTuple: ops.set('~' + ID.Tuple, {}, ['value']),

  asSet: ops.set('~' + ID.Set, {}, ['value']),
  
};

ListComputeds.set('copy', ListOps.copy);
ListComputeds.set('reversed', ListOps.reverse);
ListComputeds.set('shuffled', ListOps.shuffle);
ListComputeds.set('first', ListOps.first);
ListComputeds.set('last', ListOps.last);
ListComputeds.set('random', ListOps.random);
ListComputeds.set('isEmpty', ListOps.isEmpty);
ListComputeds.set('isNotEmpty', ListOps.isNotEmpty);