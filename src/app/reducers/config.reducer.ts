import { createReducer, on } from '@ngrx/store';
import { Config } from '../interfaces/config';
import { loadConfig, LoadConfigPayload } from '../actions/config.actions';

export const configFeatureKey = 'config';

export const initialState: Config = null;

export const reducer = createReducer(
  initialState,
  on(
    loadConfig,
    (state: Config, action: LoadConfigPayload) => action.config
  )
);
