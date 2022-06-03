// https://www.codewars.com/kata/55c6126177c9441a570000cc/train/javascript
function getSum(str) {
    let sum = 0
    for (const num of [...str])
        sum += Number(num)
    return sum
}

function orderWeight(strng) {
    // Create [string, weight] pairs to be sorted later.
    const weights = strng.split(" ").map(weight => {
        return [weight, getSum(weight)]
    }, {})

    const sorted = weights.sort((a, b) => {
        // Rules say to sort by string if sums are equal.
        if (a[1] === b[1])
            return a[0].localeCompare(b[0])
        // Otherwise we sort by digit sum-based weights.
        return a[1] - b[1]
    }).map(pair => {
        return pair[0]
    })

    return sorted.join(" ")
}
