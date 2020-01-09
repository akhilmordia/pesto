/**
 * Created by akhil on 6/1/20.
 */

function PascalTriangle(n)
{
    if (!Number.isInteger(n) || n < 1)
    {
        throw "expects positive integer";
    }

    let triangle = [];

    if (n >= 1)
        triangle.push([1]);
    if (n >= 2)
        triangle.push([1, 1]);

    for (let currentRow = 2; currentRow < n; currentRow++)
    {
        let nextRow = [1];

        for (let column = 1; column < currentRow + 1; column++)
        {
            nextRow[column] = triangle[currentRow - 1][column] ? triangle[currentRow - 1][column] + triangle[currentRow - 1][column - 1] : 1;
        }
        triangle.push(nextRow);
    }

    return triangle;
}

module.exports = PascalTriangle;