import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { ConfigService } from '../services/config.service';
import { loadConfig } from '../actions/config.actions';
import { mergeMapTo, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../reducers';


@Injectable()
export class ConfigEffects {

  loadConfig$ = createEffect(() => {
    return this._actions$.pipe(
      ofType('[App] Init app'),
      mergeMapTo(this.configService.getConfig()),
      map(config => loadConfig({config}))
    );
  });

  constructor(private _actions$: Actions, private _store: Store<State>, private configService: ConfigService) { }
}
