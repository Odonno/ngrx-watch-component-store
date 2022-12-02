import { getLogFunction, getStateDiff } from './functions';

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

  describe('getStateDiff', () => {
    it('should return empty object if same', () => {
      const prevState = {
        a: 1,
        b: 2,
      };

      const state = {
        a: 1,
        b: 2,
      };

      const diff = getStateDiff(prevState, state);

      expect(diff).toBeUndefined();
    });

    it('should return diff object if different', () => {
      const prevState = {
        a: 1,
        b: 2,
      };

      const state = {
        a: 1,
        b: 3,
      };

      const diff = getStateDiff(prevState, state);

      const expected = {
        b: 3,
      };

      expect(diff).toEqual(expected);
    });

    it('should return diff object if prop type changed', () => {
      const prevState = {
        a: 1,
        b: 2,
      };

      const state = {
        a: 1,
        b: '3',
      };

      const diff = getStateDiff(prevState, state);

      const expected = {
        b: '3',
      };

      expect(diff).toEqual(expected);
    });

    it('should return diff object if different on complex object', () => {
      const prevState = {
        car: {
          brand: 'BMW',
          model: 'M3',
          color: 'red',
          owner: {
            firstname: 'John',
            lastname: 'Doe',
            age: 30,
          },
        },
      };

      const state = {
        car: {
          brand: 'BMW',
          model: 'M3',
          color: 'blue',
          owner: {
            firstname: 'Jane',
            lastname: 'Doe',
            age: 24,
          },
        },
      };

      const diff = getStateDiff(prevState, state);

      const expected = {
        car: {
          color: 'blue',
          owner: {
            firstname: 'Jane',
            age: 24,
          },
        },
      };

      expect(diff).toEqual(expected);
    });
  });
});
