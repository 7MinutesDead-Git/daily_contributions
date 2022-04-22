// https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript
const MORSE_CODE = {'some': '..---', 'word': '-.---'}

decodeMorse = function(morseCode) {
    const input = morseCode.split(' ')
    const result = []
    const newWord = 2
    let word = []
    let gapCount = 0

    for (const letter of input) {
        if (letter)
            word.push(MORSE_CODE[letter])
        else
            gapCount++

        if (gapCount === newWord) {
            result.push(word.join(""))
            word = []
            gapCount = 0
        }
    }
    result.push(word.join(""))
    return result.join(' ').trim()
}