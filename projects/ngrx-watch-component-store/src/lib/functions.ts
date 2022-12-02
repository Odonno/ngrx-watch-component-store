import { LogType } from './models';

export const getLogFunction = (logType?: LogType) => {
  switch (logType) {
    case 'warn':
      return console.warn;
    case 'error':
      return console.error;
    default:
      return console.info;
  }
};

export const getStateDiff = (prevState: any, state: any) => {
  const diff: any = {};

  Object.keys(state).forEach((key) => {
    const prevStateType = typeof prevState[key];
    const stateType = typeof state[key];

    if (prevStateType === 'object' && stateType === 'object') {
      diff[key] = getStateDiff(prevState[key], state[key]);
      return;
    }

    if (prevStateType !== stateType) {
      diff[key] = state[key];
      return;
    }

    if (prevState[key] !== state[key]) {
      diff[key] = state[key];
    }
  });

  if (Object.keys(diff).length === 0) {
    return undefined;
  }

  return diff;
};
