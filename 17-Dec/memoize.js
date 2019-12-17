/**
 * Created by akhil on 17/12/19.
 */
function expensiveOperation()
{
    console.log('expensiveOperation function is called!');
    return 22;
}

let memoize = function (memoizeMeImExpensive)
{
    if (typeof memoizeMeImExpensive !== "function")
    {
        return "Some Error";
    }

    let hits = {};
    return function ()
    {
        if (!(memoizeMeImExpensive.name in hits))
        {
            hits[memoizeMeImExpensive.name] = memoizeMeImExpensive();
        }
        return hits[memoizeMeImExpensive.name];
    }
};

const memoized = memoize(expensiveOperation); // <- memoize function
console.log(memoized());
console.log(memoized());

