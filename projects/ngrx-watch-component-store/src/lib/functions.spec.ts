import { getLogFunction } from './functions';

describe('functions', () => {
  describe('getLogFunction', () => {
    it('should be console.info by default', () => {
      const fn = getLogFunction();

      expect(fn).toBe(console.info);
    });

    it('should be console.info if type "info"', () => {
      const fn = getLogFunction('info');

      expect(fn).toBe(console.info);
    });

    it('should be console.info if type "warn"', () => {
      const fn = getLogFunction('warn');

      expect(fn).toBe(console.warn);
    });

    it('should be console.info if type "error"', () => {
      const fn = getLogFunction('error');

      expect(fn).toBe(console.error);
    });
  });
});
