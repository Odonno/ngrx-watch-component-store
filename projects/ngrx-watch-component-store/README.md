# NgrxWatchComponentStore

```
npm i ngrx-watch-component-store
```

### How to use?

Simply add `WatchComponentState` decorator on each `ComponentStore` in your app. See for yourself:

```ts
import { Injectable } from "@angular/core";
import { ComponentStore } from "@ngrx/component-store";
import { WatchComponentState } from "ngrx-watch-component-store";

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
```
