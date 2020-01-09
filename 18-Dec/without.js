/**
 * Created by akhil on 18/12/19.
 */

function scanAndCompare(needle, haystack)
{
    //console.log(haystack.map(hay => Object.is(hay, needle)));
    return haystack.map(hay => Object.is(hay, needle));
}

function without(unwantedValues, haystack)
{
    return haystack.filter(value =>
    {
        return !scanAndCompare(value, unwantedValues).includes(true);
    })
}

module.exports = without;