import { createSelector } from '@ngrx/store';
import { rootStateSelector } from './root-state.selector';
import { values } from 'ramda';

export const configSelector = createSelector(
    rootStateSelector,
    state => values(state.config)
);
