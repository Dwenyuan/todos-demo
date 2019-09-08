import { createReducer, on } from '@ngrx/store';
import {
  addCollect,
  removeCollect,
  updateCollect,
  getCollects
} from './inbox.actions';
import { Collect } from 'src/app/model/collect.model';

export function collectReducer(state: Collect[], action) {
  return createReducer(
    [],
    on(addCollect, (s: Collect[]) => [...s]),
    on(removeCollect, (s: Collect[]) => s),
    on(updateCollect, (s: Collect[]) => s),
    on(getCollects, (s: Collect[]) => s)
  )(state, action);
}
