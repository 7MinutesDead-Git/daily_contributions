function getImbalance(window) {
    const min = Math.min(...window)
    const max = Math.max(...window)
    return max - min
}

function getTotalImbalance(weight) {
    // Individual shipments will never be imbalanced with themselves, so the sliding window doesn't need to be smaller than 2 for comparison.
    let left = 0
    let windowSize = 1
    let right = left + windowSize
    let imbalance = 0

    while (left !== 0 && right !== weight.length) {
        const slidingWindow = weight.slice(left, right)
        imbalance += getImbalance(slidingWindow)

        // Move window up until right hits the end.
        if (right !== weight.length) {
            left++
            right++
        }
        // Once right hits the end, reset left to 0, expand window by +1, and begin again.
        else if (right === weight.length) {
            windowSize++
            left = 0
            right = left + windowSize
        }
    }
    // We'll escape the while loop at the very last iteration, so be sure we add the final imbalance here.
    imbalance += getImbalance(weight.slice(left, right))

    return imbalance
}

getTotalImbalance([3, 3, 2, 3])