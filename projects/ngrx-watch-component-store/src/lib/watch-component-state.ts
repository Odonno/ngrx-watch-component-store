import { ComponentStore } from '@ngrx/component-store';
import { merge } from 'rxjs';
import { bufferCount, take, tap } from 'rxjs/operators';
import { getLogFunction, getStateDiff } from './functions';
import { LogType } from './models';

export type WatchComponentStateOptions = {
  logType?: LogType;
};

/**
 * Decorator used to log state of a @ngrx/component-store
 * Will create a watchState effect
 */
export default function ({ logType }: WatchComponentStateOptions = {}) {
  return <T extends { new (...args: any[]): ComponentStore<any> }>(
    target: T
  ) => {
    const name = target.name;
    const logFn = getLogFunction(logType);

    return class extends target {
      watchState = this.effect(() => {
        let lastTime: Date | undefined;

        const logInitialState$ = this.state$.pipe(
          take(1),
          tap((state) => {
            const time = new Date();

            const obj = {
              name,
              state,
              time,
            };

            logFn(obj);

            lastTime = time;
          })
        );

        const logDiff$ = this.state$.pipe(
          bufferCount(2, 1),
          tap(([prevState, state]) => {
            const time = new Date();
            const elaspedTime = lastTime
              ? time.getTime() - lastTime.getTime()
              : undefined;

            const diff = getStateDiff(prevState, state);

            const obj = {
              name,
              prevState,
              state,
              diff,
              time,
              elaspedTime,
            };

            logFn(obj);

            lastTime = time;
          })
        );

        return merge(logInitialState$, logDiff$);
      });
    };
  };
}
