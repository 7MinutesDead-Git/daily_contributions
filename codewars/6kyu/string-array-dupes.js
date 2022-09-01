// https://www.codewars.com/kata/59f08f89a5e129c543000069/train/javascript
function dup(s) {
    const result = []

    for (const word of s) {
        let newWord = ""
        let previousLetter = ""

        for (const letter of word) {
            if (letter !== previousLetter)
                newWord += letter
            previousLetter = letter
        }
        result.push(newWord)
    }

    return result
}