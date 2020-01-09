/**
 * Created by akhil on 17/12/19.
 */

const { memoize } = require('./memoize');

describe('cacheFunction', () => {
    it('should return a function', () => {
        const foo = x => (x * x);
        expect(typeof memoize(foo)).toBe('function');
    });

    it('The cached function should return the correct result', () => {
        const foo = x => (x * x);
        const cachedFunction = memoize(foo);
        expect(cachedFunction(5)).toBe(25);
    });

    it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
        const foo = jest.fn();
        const memoized = memoize(foo);
        memoized(true);
        memoized(true);
        memoized(true);
        memoized(true);
        memoized(true);
        memoized(10);
        memoized(10);
        memoized(10);
        memoized(10);
        memoized(10);
        expect(foo).toHaveBeenCalledTimes(2);
    });
});