// https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
function getAlphabetValues() {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
    const values = new Map()

    for (const [index, letter] of alphabet.entries())
        values[letter] = index + 1
    return values
}

function alphabetPosition(text) {
    text = text.toLowerCase()
    const alphabet = getAlphabetValues()
    let result = ""

    for (const letter of text) {
        if (letter in alphabet)
            result += alphabet[letter] + " "
    }
    return result.trim()
}

console.log(alphabetPosition("this is a test!"))