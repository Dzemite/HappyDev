import { NgModule, LOCALE_ID } from '@angular/core';
import { StoreModule, Store } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { DateAdapter } from './classes/date-adapter';
import { DATEPICKER_ADATPTER } from '@teh-lab/angular-uikit/datepicker';

import { initApp } from './actions/init-app.actions';
import { reducers, metaReducers, State } from './reducers';

import { environment } from '../environments/environment';

import { ConfigEffects } from './effects/config.effects';

import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';

import { ConfigService } from './services/config.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([
      ConfigEffects
    ])
  ],
  providers: [
    ConfigService,
    { provide: LOCALE_ID, useValue: 'ru-RU' },
    {
      provide: DATEPICKER_ADATPTER,
      useClass: DateAdapter
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _store: Store<State>) {
    this._store.dispatch(initApp());
  }
}
