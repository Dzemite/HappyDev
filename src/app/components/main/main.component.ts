import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { configFeatureKey } from 'src/app/reducers/config.reducer';
import { Config } from 'src/app/interfaces/config';
import { Observable } from 'rxjs';
import { filter, first } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  readonly config: Observable<Config>;

  constructor(
    private _store: Store<State>,
  ) {
    this.config = this._store.pipe(
      select(configFeatureKey),
      filter(val => Boolean(val)),
      first()
    );
  }

  ngOnInit() {
  }

}
