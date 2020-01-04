/**
 * Created by akhil on 24/12/19.
 */

function isomorphic(list)
{
    const str1 = list[0];
    const str2 = list[1];

    if (str1.length !== str2.length)
        return false;

    let myMap = new Map();

    for (let charIndex = 0; charIndex < str1.length; charIndex++)
    {
        if (myMap.get(str1.charAt(charIndex))
            && myMap.get(str1.charAt(charIndex)) !== str2.charAt(charIndex))
        {
            return false;
        }
        myMap.set(str1.charAt(charIndex), str2.charAt(charIndex));
    }
    return true;
}

module.exports = isomorphic;