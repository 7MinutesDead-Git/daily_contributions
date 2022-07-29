// https://www.codewars.com/kata/57a6633153ba33189e000074/train/javascript
const orderedCount = function (text) {
    const counts = Array.from(text).reduce((count, letter) => {
        if (count[letter])
            count[letter]++
        else
            count[letter] = 1
        return count
    }, {})

    const result = []
    for (const letter in counts) {
        result.push([letter, counts[letter]])
    }
    return result
}