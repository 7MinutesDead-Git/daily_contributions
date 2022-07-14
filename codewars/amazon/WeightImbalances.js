function getImbalance(window) {
    const min = Math.min(...window)
    const max = Math.max(...window)
    return max - min
}

function getTotalImbalance(weight) {
    // -------------------------------------
    // Individual shipments will never be imbalanced with themselves, so the sliding window doesn't need to be smaller than 2 for comparison.
    let left = 0
    // With slice in js, the "end" element is not included so I'll need to ensure it's incremented by one more than I would think.
    let windowSize = 2
    let right = left + windowSize
    const rightEnd = weight.length
    let imbalance = 0

    // -------------------------------------
    while (windowSize !== weight.length + 1) {
        const slidingWindow = weight.slice(left, right)
        imbalance += getImbalance(slidingWindow)

        // Move window up until right hits the end.
        if (right !== rightEnd) {
            left++
            right++
        }
        // Once right hits the end, reset left to 0, expand window by +1, and begin again.
        else if (right === rightEnd) {
            windowSize++
            left = 0
            right = left + windowSize
        }
    }
    return imbalance
}

console.log(getTotalImbalance([3, 3, 2, 3]))