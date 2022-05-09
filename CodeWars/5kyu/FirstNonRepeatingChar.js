// https://www.codewars.com/kata/52bc74d4ac05d0945d00054e/train/javascript
function firstNonRepeatingLetter(s) {
    const charCounts = [...s].reduce((counts, char) => {
        const lower = char.toLowerCase()
        counts[lower] ? counts[lower]++ : counts[lower] = 1
        return counts
    }, {})

    for (const char of s) {
        const lower = char.toLowerCase()
        if (charCounts[lower] === 1)
            return char
    }
    return ""
}