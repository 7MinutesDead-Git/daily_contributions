// https://www.algoexpert.io/questions/validate-subsequence
function isValidSubsequence(array, sequence) {
    // The amount of elements from sequence we've found in array.
    // We'll say that if we've found them all (sequence.length), then return true.
    let found = 0
    // The element from sequence we're currently searching for.
    // We'll start with the first.
    let target = sequence[0]

    // We can do this in O(n), one pass through array.
    for (const num of array) {
        if (num === target) {
            found++
            // Found counter also happens to line up with the index
            // we want to be tracking, so we'll use it as our moving index too.
            target = sequence[found]
        }
    }
    return found === sequence.length
}

// Even simpler:
function getSubsequence(array, subarray) {
    let target = 0

    for (const num of array) {
        if (num === subarray[target])
            target++
    }
    return target === subarray.length
}