console.log(isAnagram('silent', 'listen')) // should return true
console.log(isAnagram('silent', 'listens')) // should return false
console.log(isAnagram('telegram', 'grametel')) // should return true

function getCounts(input: string) {
    return [...input].reduce((count, letter) => {
        count[letter] ? count[letter]++ : count[letter] = 1
        return count
    }, {})
}

function isAnagram(a: string, b: string) {
    if (a.length !== b.length)
        return false

    const aCounts = getCounts(a)
    const bCounts = getCounts(b)

    for (const letter in aCounts) {
        if (aCounts[letter] !== bCounts[letter])
            return false
    }
    return true
}