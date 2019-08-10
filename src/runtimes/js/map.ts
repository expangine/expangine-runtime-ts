
import { Runtime } from '../../Runtime';
import { MapOps } from '../../def/MapOps';
import { saveScope, restoreScope, _map, _optional, _number } from './helper';
import { toArray, getCompare } from '../../fns';


// tslint:disable: no-magic-numbers
// tslint:disable: one-variable-per-declaration

export default (run: Runtime) =>
{

  // Operations

  run.setOperation(MapOps.get, (params) => (context) => 
    _map(params.map, context).get(params.key(context))
  );

  run.setOperation(MapOps.set, (params) => (context) => 
    _map(params.map, context).set(params.key(context), params.value(context))
  );

  run.setOperation(MapOps.has, (params) => (context) =>
    _map(params.map, context).has(params.key(context))
  );

  run.setOperation(MapOps.delete, (params) => (context) =>
    _map(params.map, context).delete(params.key(context))
  );

  run.setOperation(MapOps.keys, (params) => (context) =>
    toArray(_map(params.map, context).keys())
  );

  run.setOperation(MapOps.values, (params) => (context) =>
    toArray(_map(params.map, context).values())
  );

  run.setOperation(MapOps.entries, (params) => (context) => {
    const map = _map(params.map, context);
    const entries: { keys: any[], values: any[] } = { keys: [], values: [] };

    for (const [key, value] of map.entries()) {
      entries.keys.push(key);
      entries.values.push(value);
    }

    return entries;
  });

  run.setOperation(MapOps.clear, (params) => (context) => {
    const map = _map(params.map, context);
    map.clear();

    return map;
  });

  run.setOperation(MapOps.count, (params) => (context) =>
    _map(params.map, context).size
  );

  run.setOperation(MapOps.cmp, (params, scope) => (context => {
    const map = _map(params.value, context);
    const test = _map(params.test, context);

    return handleMap(map, context, scope, () => {
      let less = 0, more = 0;

      for (const [key, value] of map.entries()) {
        if (!test.has(key)) {
          more++;
          continue;
        }

        context[scope.key] = key;
        context[scope.value] = value;
        context[scope.test] = test.get(key);

        const d = _number(params.compare, context, 0);

        if (d < 0) less++;
        else if (d > 0) more++;
      }

      for (const key of test.keys()) {
        if (!map.has(key)) {
          less++;
        }
      }

      return getCompare(less, more);
    });
  }));

  run.setOperation(MapOps.copy, (params, scope) => (context) => {
    const map = _map(params.map, context);
    const entries = map.entries();

    if (!params.deepCopy && !params.deepCopyKey) {
      return new Map(toArray(entries));
    }
    const entriesCopy: [any, any][] = [];
    handleMap(map, context, scope, () => {  
      for (const [key, value] of entries) {
        context[scope.key] = key;
        context[scope.value] = value;
        context[scope.map] = map;

        entriesCopy.push([
          _optional(params.deepCopyKey, context, key),
          _optional(params.deepCopy, context, value)
        ]);
      }
    });

    return new Map(entriesCopy);
  });

  run.setOperation(MapOps.map, (params, scope) => (context) => {
    const map = _map(params.map, context);
    const entries = map.entries();

    if (!params.transform && !params.transformKey) {
      return new Map(toArray(entries));
    }
    const entriesTransformed: [any, any][] = [];
    handleMap(map, context, scope, () => {  
      for (const [key, value] of entries) {
        context[scope.key] = key;
        context[scope.value] = value;
        context[scope.map] = map;

        entriesTransformed.push([
          _optional(params.transformKey, context, key),
          _optional(params.transform, context, value)
        ]);
      }
    });

    return new Map(entriesTransformed);
  });

  run.setOperation(MapOps.toPlainObject, (params) => (context) => {
    const map = _map(params.map, context);
    const plain = Object.create(null);

    for (const [key, value] of map.entries()) {
      plain[key] = value;
    }

    return plain;
  });

  // Comparisons

  run.setOperation(MapOps.isEqual, (params, scope) => (context) => {
    const map = _map(params.value, context);
    const test = _map(params.test, context);

    if (map.size !== test.size) {
      return false;
    }

    return handleMap(map, context, scope, () => {
      for (const [key, value] of map.entries()) {
        if (!test.has(key)) {
          return false;
        }

        context[scope.key] = key;
        context[scope.value] = value;
        context[scope.test] = test.get(key);

        if (!params.isEqual(context)) { 
          return false;
        }
      }

      return true;
    });
  });

  run.setOperation(MapOps.isNotEqual, (params, scope) => (context) =>
    !run.getOperation(MapOps.isEqual.id)(params, scope)(context)
  );

  run.setOperation(MapOps.isLess, (params, scope) => (context) =>
    run.getOperation(MapOps.cmp.id)(params, scope)(context) < 0
  );

  run.setOperation(MapOps.isLessOrEqual, (params, scope) => (context) =>
    run.getOperation(MapOps.cmp.id)(params, scope)(context) <= 0
  );

  run.setOperation(MapOps.isGreater, (params, scope) => (context) =>
    run.getOperation(MapOps.cmp.id)(params, scope)(context) > 0
  );

  run.setOperation(MapOps.isGreaterOrEqual, (params, scope) => (context) =>
    run.getOperation(MapOps.cmp.id)(params, scope)(context) >= 0
  );

};

function handleMap<R>(map: Map<any, any>, context: object, scope: Record<string, string>, handle: (map: Map<any, any>) => R): R
{
  const saved = saveScope(context, scope);
  
  const result = handle(map);

  restoreScope(context, saved);

  return result;
}