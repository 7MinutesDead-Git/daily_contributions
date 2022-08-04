// https://www.algoexpert.io/questions/two-number-sum
function twoNumberSum(array, targetSum) {
    // We'll loop through the array once, storing the current number as a key, and the
    // target number we need to find as the value.
    // This operation is O(n) since we'll need to check in every number once.
    const pairs = array.reduce((pair, num) => {
        pair[num] = targetSum - num
        return pair
    }, {})

    // Then we can loop through the keys to see if a key exists as a target value.
    // That means, for example, we had a matching 6 for our initial 4 to equal targetSum 10.
    // This whole loop is all O(1) operations, but with a worst case of O(n) iterations if the pair
    // is the last found.
    for (let num in pairs) {
        num = Number(num)  // <-- Since the keys are technically strings now
            const target = pairs[num]

        if (target in pairs && num !== target)
            return [num, target]
    }
    return []
}