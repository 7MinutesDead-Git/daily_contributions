// https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript
function getCounts(word) {
    return [...word].reduce((counts, current) => {
        counts[current] ? counts[current]++ : counts[current] = 1
        return counts
    }, {})
}

function anagrams(word, words) {
    const result = []
    const charCounts = getCounts(word)

    for (const currentWord of words) {
        let matches = 0
        const currentCounts = getCounts(currentWord)

        for (const count in charCounts) {
            if (charCounts[count] === currentCounts[count])
                matches += currentCounts[count]
        }
        if (matches === currentWord.length)
            result.push(currentWord)
    }
    return result
}

console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']))