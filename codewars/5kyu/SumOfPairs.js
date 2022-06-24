// https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript

// Optimal approach.
function sumPairs(ints, s) {
    const set = new Set()

    for (const int of ints) {
        if (set.has(int))
            return [int, s - int]
        set.add(s - int)
    }
}

// Naive approach that did not scale.
function sumPairs(ints, s) {
    const arbitraryUpperBound = 100000
    let left = 0
    let right = left + 1
    const pairs = []
    let result = [arbitraryUpperBound, arbitraryUpperBound]

    while (left < ints.length) {
        if (ints[left] + ints[right] === s)
            pairs.push([left, right])
        right++

        if (right > ints.length) {
            left++
            right = left + 1
        }
    }

    for (const pair of pairs) {
        if (pair[1] < result[1])
            result = pair
    }
    const leftResult = ints[result[0]]
    const rightResult = ints[result[1]]
    if (leftResult === undefined || rightResult === undefined)
        return undefined
    return [leftResult, rightResult]
}