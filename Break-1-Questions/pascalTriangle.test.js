/**
 * Created by akhil on 6/1/20.
 */

const PascalTriangle = require('./pascalTriangle');
const twentieth = [
    1,
    19,
    171,
    969,
    3876,
    11628,
    27132,
    50388,
    75582,
    92378,
    92378,
    75582,
    50388,
    27132,
    11628,
    3876,
    969,
    171,
    19,
    1];

test('Basic Test Cases', () =>
{
    expect(new PascalTriangle(3)).toEqual([[1], [1, 1], [1, 2, 1]]);
    expect(new PascalTriangle(20)[19]).toEqual(twentieth);
});



