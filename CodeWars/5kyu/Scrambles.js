// https://www.codewars.com/kata/55c04b4cc56a697bb0000048/train/javascript
function getCounts(string) {
    return [...string].reduce((counts, char) => {
        if (!counts[char])
            counts[char] = 1
        else
            counts[char]++
        return counts
    }, {})
}

function scramble(str1, str2) {
    const str1Counts = getCounts(str1)
    const str2Counts = getCounts(str2)

    for (const char in str2Counts) {
        if (str1Counts[char] === undefined)
            return false
        if (str2Counts[char] > str1Counts[char])
            return false
    }
    return true
}