// Given a string, return a new string that has transformed based on the input:
// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.
//
// For example:
// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


// I thought the above meant get rid of excess spaces, but apparently not lol.
// Still, here is that more complicated solution.
function transformNoExcessSpace(str: string) {
    const result = []
    // Trim the word of whitespace.
    // Split into words by spaces.
    // Iterate through the array of words.
    // Skip if the "word" is a space (ie, there were multiple   spaces between words that didn't count as a separator).
    // Iterate through the characters in the word, swapping case. Push to result array.
    // Reverse result array. Join as word with a space as the separator.
    const sentence = str.trim().split(" ")
    for (const word of sentence) {
        if (word === " " || word === "") {
            continue
        }
        let swappedCase = ""
        for (const char of word) {
            if (char === char.toUpperCase()) {
                swappedCase += char.toLowerCase()
            }
            else {
                swappedCase += char.toUpperCase()
            }
        }
        result.push(swappedCase)
    }
    return result.reverse().join(" ")
}


// Here is a correct answer given the parameters.
function transform(str: string) {
    const sentence = str.split(" ").map((word) => {
        let newWord = ""
        for (const char of word) {
            if (char === char.toUpperCase())
                newWord += char.toLowerCase()
            else
                newWord += char.toUpperCase()
        }
        return newWord
    })
    return sentence.reverse().join(" ")
}


console.log(transformNoExcessSpace("Example Input"))
console.log(transformNoExcessSpace("   Example Input   "))
console.log(transformNoExcessSpace("Example Input     Now"))
console.log(transform("Example Input"))
console.log(transform("   Example Input   "))
console.log(transform("Example Input     Now"))