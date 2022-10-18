// Given a sentence, return the longest word in the string.

// Should return 'Development'
console.log(longestWord('Top Shelf Web Development Training on Scotch'))
console.log(longestWord('A Be Cee Deee Eeeee'))
console.log(longestWord(''))

function longestWord(sentence: string) {
    let result = ""

    for (const word of sentence.split(" ")) {
        if (word.length > result.length) {
            result = word
        }
    }
    return result
}