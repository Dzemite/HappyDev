import { createAction, props } from '@ngrx/store';
import { Config } from '../interfaces/config';

export interface LoadConfigPayload {
  config: Config;
}

export const loadConfig = createAction(
  '[Config] Load Config',
  props<LoadConfigPayload>()
);
