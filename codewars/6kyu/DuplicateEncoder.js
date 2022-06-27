// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/train/javascript
// Without tracking indices, this requires two for loops. Still, O(2N) is O(N).
function duplicateEncode(word) {
    const counts = {}
    for (let char of word) {
        char = char.toLowerCase()
        counts[char] ? counts[char]++ : counts[char] = 1
    }

    let result = ""
    for (const char of word) {
        if (counts[char.toLowerCase()] > 1)
            result += ")"
        else
            result += "("
    }
    return result
}
