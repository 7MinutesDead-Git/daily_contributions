// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
function duplicateCount(text) {
    const counts = {}
    for (const letter of text) {
        const key = letter.toLowerCase()
        counts[key] ? counts[key]++ : counts[key] = 1
    }

    let result = 0
    for (const key of Object.keys(counts)) {
        if (counts[key] > 1)
            result++
    }
    return result

}