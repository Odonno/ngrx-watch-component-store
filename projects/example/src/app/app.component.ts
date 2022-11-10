import { Component } from '@angular/core';
import { AppStore } from './app.store';

@Component({
  selector: 'app-root',
  template: `
    <div>{{ count$ | async }}</div>
    <button type="button" (click)="increment()">Increment</button>
    <button type="button" (click)="decrement()">Decrement</button>
    <button type="button" (click)="reset()">Reset</button>
  `,
  styles: [],
  providers: [AppStore],
})
export class AppComponent {
  count$ = this.store.count$;

  constructor(private readonly store: AppStore) {}

  increment() {
    this.store.increment();
  }

  decrement() {
    this.store.decrement();
  }

  reset() {
    this.store.reset();
  }
}
