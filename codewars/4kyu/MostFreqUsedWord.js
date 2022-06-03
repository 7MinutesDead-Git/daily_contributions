// https://www.codewars.com/kata/51e056fe544cf36c410000fb/train/javascript
// Helper method
function getTopThree(counts) {
    let count = 0
    const result = []
    const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])

    for (const pair of sorted) {
        count++
        if (count <= 3)
            result.push(pair[0])
    }

    // Edge case where the only "word" in the text input is a single apostrophe.
    if (result[0] === "'")
        return []

    return result
}

// Solution
function topThreeWords(text) {
    const accepted = "abcdefghijklmnopqrstuvwxyz'"
    let word = ""
    let i = 0
    const wordCounts = {}

    function addWordToCounts() {
        wordCounts[word] ? wordCounts[word]++ : wordCounts[word] = 1
    }

    while (i < text.length) {
        const currentChar = text[i].toLowerCase()
        if (accepted.includes(currentChar)) {
            word += currentChar
        }
        else {
            // Ensure word isn't blank before counting.
            if (word)
                addWordToCounts(word)
            word = ""
        }
        i++
    }
    // Add final word since the loop will break before the final word addition.
    if (word)
        addWordToCounts(word)

    return getTopThree(wordCounts)
}