
import { Operations } from '../Operation';
import { ID } from '../types/ID';


export const ListOperations = new Operations(ID.List + ':');

const ops = ListOperations;

export const ListOps = 
{

  // Static

  create: ops.set('create'),

  // Operations

  build: ops.set('new', {}, ['count', 'item'], ['sameItem'], ['list', 'index', 'last', 'count'], ['item'], ['item']),

  get: ops.set('get', {}, ['list', 'index'], [], [], [], ['list']),

  set: ops.set('set', {}, ['list', 'index', 'value'], [], [], [], ['list']),

  add: ops.set('+', { mutates: ['list'] }, ['list', 'item'], [], [], [], ['list']),

  addFirst: ops.set('+f', { mutates: ['list'] }, ['list', 'item'], [], [], [], ['list']),

  addLast: ops.set('+l', { mutates: ['list'] }, ['list', 'item'], [], [], [], ['list']),

  insert: ops.set('+@', { mutates: ['list'] }, ['list', 'item', 'index'], [], [], [], ['list']),

  remove: ops.set('-', { mutates: ['list'], complexity: 1 },  ['list', 'item', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list']),

  removeFirst: ops.set('-f', { mutates: ['list'] }, ['list'], [], [], [], ['list']),

  removeLast: ops.set('-l', { mutates: ['list'] }, ['list'], [], [], [], ['list']),

  removeAt: ops.set('-@', { mutates: ['list'] }, ['list', 'index'], [], [], [], ['list']),

  removeWhere: ops.set('-?', { mutates: ['list'] }, ['list', 'where'], [], ['list', 'item', 'index'], ['where'], ['list']),

  contains: ops.set('contains', { complexity: 1 }, ['list', 'item', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual']),

  find: ops.set('find', { complexity: 1 }, ['list', 'where'], ['start', 'reverse'], ['list', 'item', 'index'], ['where'], ['list']),

  copy: ops.set('copy', { complexity: 1 }, ['list'], ['deepCopy'], ['copy'], ['deepCopy'], ['list']),

  reverse: ops.set('reverse', { complexity: 0.5 }, ['list'], [], [], [], ['list']),

  exclude: ops.set('exclude', { mutates: ['list'], complexity: 2 },  ['list', 'exclude', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list']),

  overlap: ops.set('overlap', { complexity: 2 }, ['list', 'overlap', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list']),

  sort: ops.set('sort', { mutates: ['list'], complexity: 1 },   ['list', 'compare'], [], ['list', 'value', 'test'], ['compare'], ['list']),

  shuffle: ops.set('shuffle', { mutates: ['list'], complexity: 1 }, ['list'], ['times'], [], [], ['list']),

  unique: ops.set('unique', { complexity: 2 }, ['list', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual'], ['list']),

  duplicates: ops.set('dupes', { complexity: 2 }, ['list', 'isEqual'], ['once'], ['list', 'value', 'test'], ['isEqual'], ['list']),

  take: ops.set('take', { mutates: ['list'] }, ['list', 'count'], [], [], [], ['list']),

  skip: ops.set('skip', { mutates: ['list'] }, ['list', 'count'], [], [], [], ['list']),

  drop: ops.set('drop', { mutates: ['list'] }, ['list', 'count'], [], [], [], ['list']),

  append: ops.set('append', {}, ['list', 'append'], [], [], [], ['list']),

  prepend: ops.set('prepend', {}, ['list', 'prepend'], [], [], [], ['list']),

  indexOf: ops.set('indexOf', { complexity: 1 }, ['list', 'item', 'isEqual'], ['start'], ['list', 'value', 'test'], ['isEqual'], ['list']),

  lastIndexOf: ops.set('lastIndexOf', { complexity: 1 }, ['list', 'item', 'isEqual'], ['start'], ['list', 'value', 'test'], ['isEqual'], ['list']),

  findIndex: ops.set('findIndex', { complexity: 1 }, ['list', 'where'], ['reverse', 'start'], ['list', 'item', 'index'], ['where']),

  last: ops.set('last', {}, ['list'], [], [], [], ['list']),

  first: ops.set('first', {}, ['list'], [], [], [], ['list']),

  count: ops.set('count', {}, ['list']),

  randomList: ops.set('randomList', {}, ['list', 'count'], [], [], [], ['list']),

  random: ops.set('random', {}, ['list'], [], [], [], ['list']),

  // Iteration

  join: ops.set('join', { complexity: 1 }, ['list'], ['delimiter', 'toText', 'prefix', 'suffix'], ['list', 'item', 'index'], ['toText']),

  each: ops.set('each', { complexity: 1 }, ['list', 'each'], ['reverse'], ['list', 'item', 'index'], ['each'], ['list']),

  filter: ops.set('filter', { complexity: 1 }, ['list', 'filter'], [], ['list', 'item', 'index'], ['filter'], ['list']),

  not: ops.set('not', { complexity: 1 }, ['list', 'not'], [], ['list', 'item', 'index'], ['not'], ['list']),

  map: ops.set('map', { complexity: 1}, ['list', 'transform'], [], ['list', 'item', 'index'], ['transform'], ['list']),

  split: ops.set('split', { complexity: 1}, ['list', 'pass'], [], ['list', 'item', 'index'], ['pass'], ['list']),

  reduce: ops.set('reduce', { complexity: 1}, ['list', 'reduce', 'initial'], [], ['list', 'item', 'index', 'reduced'], ['reduce'], ['reduce']),

  cmp: ops.set('cmp', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare']),

  group: ops.set('group', { complexity: 1 }, ['list', 'getKey'], ['getValue'], ['list', 'item', 'index'], ['getKey', 'getValue'], ['list']),

  toMap: ops.set('toMap', { complexity: 1 }, ['list', 'getKey'], ['getValue'], ['list', 'item', 'index'], ['getKey', 'getValue'], ['list']),

  // Comparisons

  isValid: ops.set('?', {}, ['value']),

  isEmpty: ops.set('0?', {}, ['list']),

  isNotEmpty: ops.set('!0', {}, ['list']),

  isEqual: ops.set('=', { complexity: 1 }, ['list', 'test', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual']),

  isNotEqual: ops.set('!=', { complexity: 1 }, ['list', 'test', 'isEqual'], [], ['list', 'value', 'test'], ['isEqual']),

  isLess: ops.set('<', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare']),

  isLessOrEqual: ops.set('<=', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare']),

  isGreater: ops.set('>', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare']),

  isGreaterOrEqual: ops.set('>=', { complexity: 1 }, ['value', 'test', 'compare'], [], ['list', 'value', 'test'], ['compare']),

  // Casts
  
  asAny: ops.set('~' + ID.Any, {}, ['value']),

  asBoolean: ops.set('~' + ID.Boolean, {}, ['value']),

  asDate: ops.set('~' + ID.Date, {}, ['value']),

  asList: ops.set('~' + ID.List, {}, ['value']),

  asMap: ops.set('~' + ID.Map, {}, ['value']),

  asNumber: ops.set('~' + ID.Number, {}, ['value']),

  asObject: ops.set('~' + ID.Object, {}, ['value']),

  asText: ops.set('~' + ID.Text, {}, ['value']),

  asTuple: ops.set('~' + ID.Tuple, {}, ['value']),
  
};
