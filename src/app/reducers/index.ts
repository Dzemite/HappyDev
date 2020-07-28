import {
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { Config } from '../interfaces/config';
import * as fromConfig from './config.reducer';


export interface State {
  [fromConfig.configFeatureKey]: Config;
}

export const reducers: ActionReducerMap<State> = {
  [fromConfig.configFeatureKey]: fromConfig.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
