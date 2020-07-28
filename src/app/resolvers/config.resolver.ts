import { Config } from '../interfaces/config';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
// import { ConfigService } from '../services/config.service';
import { Injectable } from '@angular/core';
import { State } from '../reducers';
import { Store, select } from '@ngrx/store';
import { filter, first } from 'rxjs/operators';
import { configSelector } from '../selectors/config.selector';

@Injectable({
    providedIn: 'root'
})
export class ConfigResolver implements Resolve<unknown> {
    constructor(private store: Store<State>) {}
    resolve(): Observable<unknown> {
        return this.store.pipe(
            select(configSelector),
            filter(val => Boolean(val)),
            first()
        );
    }
}
