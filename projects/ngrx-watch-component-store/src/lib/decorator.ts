import { ComponentStore } from '@ngrx/component-store';
import { tap } from 'rxjs/operators';

/**
 * Decorator used to log state of a @ngrx/component-store
 * Will create a watchState effect
 */
export function WatchComponentState() {
  return <T extends { new (...args: any[]): ComponentStore<any> }>(
    target: T
  ) => {
    return class extends target {
      watchState = this.effect(() => {
        return this.state$.pipe(
          tap((state) => console.log(target.name, state))
        );
      });
    };
  };
}
