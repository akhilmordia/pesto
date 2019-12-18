/**
 * Created by akhil on 18/12/19.
 */

//todo: fixing a silly mistake in my code. Pushing it for review.
function arrayAddition(...arrays)
{
    let sumArray = [];
    arrays.forEach(array =>
    {
        if (!Array.isArray(array) || array.length === 0)
        {
            throw "Parameter is not a valid array!";
        }

        array.forEach((value, index) =>
        {
            if (!Number.isInteger(value))
            {
                throw "value is not integer!";
            }

            if (!(index in sumArray))
                sumArray[index] = 0;

            sumArray[index] += value;
        })
    });

    return sumArray;
}

module.exports = arrayAddition;