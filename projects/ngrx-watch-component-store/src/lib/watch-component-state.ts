import { ComponentStore } from '@ngrx/component-store';
import { merge } from 'rxjs';
import { bufferCount, take, tap } from 'rxjs/operators';

/**
 * Decorator used to log state of a @ngrx/component-store
 * Will create a watchState effect
 */
export default function () {
  return <T extends { new (...args: any[]): ComponentStore<any> }>(
    target: T
  ) => {
    const name = target.name;

    return class extends target {
      watchState = this.effect(() => {
        const logInitialState$ = this.state$.pipe(
          take(1),
          tap((state) => {
            const obj = {
              name,
              state,
            };

            console.log(obj);
          })
        );

        const logDiff$ = this.state$.pipe(
          bufferCount(2, 1),
          tap(([prevState, state]) => {
            const obj = {
              name,
              prevState,
              state,
            };

            console.log(obj);
          })
        );

        return merge(logInitialState$, logDiff$);
      });
    };
  };
}
