// https://www.codewars.com/kata/58235a167a8cb37e1a0000db/train/javascript
function numberOfPairs(gloves) {
    const counts = {}
    let pairs = 0

    for (const glove of gloves) {
        if (counts[glove])
            counts[glove]++
        else
            counts[glove] = 1
    }

    for (const glove in counts) {
        const gloveCount = counts[glove]

        if (gloveCount >= 2) {
            const newPairs = Math.floor(gloveCount / 2)
            pairs += newPairs
        }
    }
    return pairs
}