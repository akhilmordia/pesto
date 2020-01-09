/**
 * Created by akhil on 4/1/20.
 */

const validateEnglishAlphabets = (str) => /^[a-zA-Z]+$/.test(str);


function substitutionCipher(inputString)
{
    let cipherText = '';
    for (const character of inputString)
    {
        let CHAR_SHIFT_WINDOW = character.charCodeAt() % 2 === 0 ? 6 : 4;
        let newCharacter = character;

        if (validateEnglishAlphabets(character))
        {
            let ASCII_MIN, ASCII_MAX;
            if (character === character.toUpperCase())
            {
                ASCII_MIN = 65;
                ASCII_MAX = 90;
            }
            else
            {
                ASCII_MIN = 97;
                ASCII_MAX = 122;
            }

            let charCode = character.charCodeAt();
            charCode = charCode > (ASCII_MAX - CHAR_SHIFT_WINDOW) ? ASCII_MIN + CHAR_SHIFT_WINDOW - ASCII_MAX + charCode - 1 : charCode + CHAR_SHIFT_WINDOW;
            newCharacter = String.fromCharCode(charCode);
        }
        cipherText = cipherText + newCharacter;
    }

    return cipherText;
}

module.exports = substitutionCipher;