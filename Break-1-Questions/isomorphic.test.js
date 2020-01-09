/**
 * Created by akhil on 24/12/19.
 */

const isomorphic = require('./isomorphic');

test("'egg', 'add'", () =>
{
    expect(isomorphic(['egg', 'add'])).toBe(true);
});

test("'foo', 'bar'", () =>
{
    expect(isomorphic(['foo', 'bar'])).toBe(false);
});

test("'asdfghjkl', 'qwertyuio'", () =>
{
    expect(isomorphic(['asdfghjkl', 'qwertyuio'])).toBe(true);
});

test("'asdfgsjkl', 'qwertyuio'", () =>
{
    expect(isomorphic(['asdfgsjkl', 'qwertyuio'])).toBe(false);
});

test("'better', 'fetter'", () =>
{
    expect(isomorphic(['better', 'fetter'])).toBe(true);
});


