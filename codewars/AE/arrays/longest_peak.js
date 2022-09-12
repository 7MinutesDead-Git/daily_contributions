// https://www.algoexpert.io/questions/longest-peak
// Solution.
function longestPeak(array) {
    const peaks = findPeaks(array)
    const lengths = []

    for (const peak of peaks) {
        lengths.push(findLength(peak, array))
    }

    if (lengths.length === 0) {
        return 0
    }
    return Math.max(...lengths)
}

// Find all peaks in an array, where a peak is strictly greater than the two values
// it is between.
// Return those indices.
function findPeaks(array) {
    const peakIndices = []
    for (const [i, current] of array.entries()) {
        // We can't have peaks at the start of end of the array,
        // because that's just a slope, so skip those.
        if (i === 0 || i === array.length - 1)
            continue

        const left = array[i-1]
        const right = array[i+1]
        if (current > left && current > right) {
            peakIndices.push(i)
        }
    }
    return peakIndices
}

// Return the full length of a given peak.
function findLength(peak, array) {
    let left = peak - 1
    let right = peak + 1
    let length = 3

    // Start from left pointer and move left until our decline stops.
    while (array[left] > array[left-1]) {
        length++
        left--
    }
    // Same for the right side.
    while (array[right] > array[right+1]) {
        length++
        right++
    }
    return length
}