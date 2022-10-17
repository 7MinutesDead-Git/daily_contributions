console.log(mostRecurringChar('aabacada')) // will return 'a'

function mostRecurringChar(str: string) {
    const counts = [...str].reduce((count, char) => {
        count[char] ? count[char]++ : count[char] = 1
        return count
    }, {})
    console.log(counts)

    let max = 0
    let result = ""

    for (const letter of Object.keys(counts)) {
        if (counts[letter] > max) {
            result = letter
            max = counts[letter]
        }
    }
    return result
}