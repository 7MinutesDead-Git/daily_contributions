// Mentioned in glassdoor review.
// Method "has_letters" should return true if the array of chars has enough letters to form the word in the string.
// Note that it needs to have enough count of the letters in the word, i.e., "disassemble" needs three s's.
function hasLetters(charArray, target) {
    const wordCounts = getCounts(charArray)
    const targetCounts = getCounts(target)

    for (const char in targetCounts) {
        if (wordCounts[char] < targetCounts[char]) {
            return false
        }
    }
    return true
}

// Returns object with counts of each letter.
// Works for both string or array inputs.
function getCounts(word) {
    const result = {}
    for (const char of word) {
        result[char] ?
            result[char]++ :
            result[char] = 1
    }
    return result
}

// Test
console.log(hasLetters('abcd', 'aabcd')) // false
console.log(hasLetters('aabcd', 'aabc')) // true
console.log(hasLetters('abcd', 'aabcde')) // false
console.log(hasLetters('ddiissaaeemmbbllee', 'disassemble')) // false
console.log(hasLetters('disassemble', 'disassemble')) // true
console.log(hasLetters('disassemble', 'disassembles')) // false