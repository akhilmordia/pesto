const without = require('./without');

test('without([1, 2], [1, 2, 1, 4, 5]) expects [4,5]', () =>
{
    expect(without([1, 2], [1, 2, 1, 4, 5])).toStrictEqual([4, 5]);
});

test('without([0], [-0]) expects [-0]', () =>
{
    expect(without([0], [-0])).toStrictEqual([-0]);
});