// https://www.algoexpert.io/questions/non-constructible-change
function nonConstructibleChange(coins) {
    // Since we're looking for the smallest change we can't make, it's probably
    // a good idea to sort the coins first in ascending order (smallest first).
    coins.sort((a, b) => a - b)

    // If our first coin is already more than 1, then we can never make 1 cent of change.
    if (coins[0] > 1)
        return 1

    let change = 0
    // If we ever hit a coin that is greater than the previous collective change value + 1,
    // Then that change value + 1 is what we cannot make.
    for (const num of coins) {
        if (num > change + 1)
            return change + 1
        change += num
    }
    // Otherwise, we can return all change except for the + 1 we just don't have :P
    return change + 1
}