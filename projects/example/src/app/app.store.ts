import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { WatchComponentState } from 'projects/ngrx-watch-component-store/src/public-api';

type AppState = {
  count: number;
};

const initialAppState: AppState = {
  count: 0,
};

@Injectable()
@WatchComponentState()
export class AppStore extends ComponentStore<AppState> {
  constructor() {
    super(initialAppState);
  }

  // selectors
  readonly count$ = this.select((state) => state.count);

  // updaters
  readonly increment = this.updater((state) => ({ count: state.count + 1 }));
  readonly decrement = this.updater((state) => ({ count: state.count - 1 }));
  readonly reset = this.updater(() => initialAppState);
}
