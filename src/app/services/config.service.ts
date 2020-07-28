import { Injectable, Inject } from '@angular/core';
import { Observable, Observer, throwError} from 'rxjs';
import { tap, first, catchError } from 'rxjs/operators';
import { Config } from '../interfaces/config';
import { HttpClient } from '@angular/common/http';
import { DOCUMENT } from '@angular/common';
import { Store } from '@ngrx/store';
import { State } from '../reducers';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private _cachedConfig: Config = null;
  private _httpObservable: Observable<Config>;
  getConfig(): Observable<Config> {
    if (this._cachedConfig) {
      return new Observable((observer: Observer<Config>) => {
        observer.next(this._cachedConfig);
        observer.complete();
      });
    }
    let baseHref: string = this.document.getElementsByTagName('base')[0].href;
    if (baseHref[baseHref.length - 1] !== '/') {
      baseHref += '/';
    }
    if (!this._httpObservable) {
      this._httpObservable = this._httpClient.get<Config>(`${baseHref}assets/config.json`)
      .pipe(
        first(),
        tap((config: Config) => {
          this._httpObservable = null;
          this._cachedConfig = config;
        }),
        catchError((err: Error) => {
          if (this._httpObservable) {
            this._httpObservable = null;
            console.log('Ошибка при загрузке конфигурации');
          }
          return throwError(err);
        })
      );
    }

    return this._httpObservable;
  }
  constructor(private _httpClient: HttpClient, @Inject(DOCUMENT) private document: Document, private store: Store<State>) { }
}
