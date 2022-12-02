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
