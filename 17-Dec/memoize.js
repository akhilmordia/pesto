/**
 * Created by akhil on 17/12/19.
 */

function keyMaker(fn, params) {
    return fn.name + JSON.stringify(params);
}

const memoize = function (fn) {
    if (typeof fn !== 'function') {
        throw new Error(`Bad Input: Expected "fuction" but received "${typeof fn}"`);
    }
    
    let cache = new Map();
    return function (params) {
        const key = keyMaker(fn, params);
        if (!cache.has(key)) {
            cache.set(key, fn(params));
        }
        return cache.get(key);
    }
};

module.exports = {
    memoize: memoize
};