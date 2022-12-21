// Given a magazine of words and a ransom note, determine if it’s possible to “cut out”
// and create the ransom note from the magazine words.
//
const magazine =
 `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
 quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
 Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`;

function lettersOnly(word: string) {
    return word.replace(/^a-zA-Z]/g, '').trim().toLowerCase()
}

function ransomableByWords(magazine: string, note: string): boolean {
    if (note.length === 0) {
        return true
    }
    const ransomWords = note.split(" ").map(word => lettersOnly(word))
    const availableWords = magazine.split(" ").map(word => lettersOnly(word))
        .reduce((count, word) => {
            count[word] ? count[word]++ : count[word] = 1
            return count
        }, {})

    for (const word of ransomWords) {
        if (availableWords[word]--) {
            continue
        }
        return false
    }

    return true
}

console.log(ransomableByWords(magazine, "sit ad est sint")) // true
console.log(ransomableByWords(magazine, "sit ad est love")) // false
console.log(ransomableByWords(magazine, "sit ad est sint in in in")) // true
console.log(ransomableByWords(magazine, "sit ad est sint in in in in")) // false
console.log(ransomableByWords(magazine, "reprehenderit")) // true
console.log(ransomableByWords(magazine, "")) // true
console.log(ransomableByWords(magazine, "aliquip ex ea commodo")) // true
