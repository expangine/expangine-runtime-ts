
import { Operations } from '../Operation';
import { ID } from '../types/ID';
import { Computeds } from '../Computed';


export const AliasedOperations = new Operations(ID.Aliased + ID.Delimiter);

export const AliasedComputeds = new Computeds(ID.Aliased + ID.Delimiter);

const ops = AliasedOperations;

export const AliasedOps = 
{

  newInstance: ops.set('newInstance', {}, ['name'], [], [], [], ['name']),

  getKey: ops.set('getKey', {}, ['name', 'instance'], [], [], [], ['name']),

  save: ops.set('save', { mutates: ['instance'] }, ['name', 'instance'], [], [], [], ['name']),

  remove: ops.set('remove', { mutates: ['instance'] }, ['name', 'instance'], [], [], [], ['name']),

  setRelated: ops.set('setRelated', { complexity: 1, mutates: ['instance', 'related']  }, ['name', 'instance', 'relation', 'related'], [], [], [], ['name', 'relation']),

  addRelated: ops.set('addRelated', { mutates: ['instance', 'related'] }, ['name', 'instance', 'relation', 'related'], [], [], [], ['name', 'relation']),

  removeRelated: ops.set('removeRelated', { mutates: ['instance', 'related'] }, ['name', 'instance', 'relation', 'related'], [], [], [], ['name', 'relation']),

  clearRelated: ops.set('clearRelated', { complexity: 1, mutates: ['instance'] }, ['name', 'instance', 'relation'], [], [], [], ['name', 'relation']),

  getRelated: ops.set('getRelated', { complexity: 1 }, ['name', 'instance', 'relation'], [], [], [], ['name', 'relation']),

};
