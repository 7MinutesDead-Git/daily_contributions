// https://www.codewars.com/kata/545cedaa9943f7fe7b000048/train/javascript

// ---------------------------------------------------------------
function createLetterCounterMap() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const counts = new Map()
    for (const letter of alphabet) {
        counts.set(letter, 0)
    }
    return counts
}

function isPangram(string) {
    const counts = createLetterCounterMap()

    for (let char of string) {
        char = char.toLowerCase()
        counts.set(char, counts.get(char) + 1)
    }

    for (const [letter, count] of counts) {
        if (count < 1)
            return false
    }
    return true
}

// ---------------------------------------------------------------
// Much more succinctly:
function isPangram(string) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("")
    string = string.toLowerCase()
    return alphabet.every((x) => string.includes(x))
}