// https://www.codewars.com/kata/52b7ed099cdc285c300001cd/train/javascript
// -----------------------------------------------------------------------
// Naive approach. Too slow for bigger numbers.
function sumIntervalsNaive(intervals) {
    const result = []
    // Fill in intervals with true, into the result array.
    // Start index subarray[0] to end index subarray[1].
    for (const subarray of intervals) {
        let start = subarray[0]
        const end = subarray[1]
        for (start; start < end; start++) {
            result[start] = true
        }
    }
    // Iterate over result array.length.
    // count trues.
    let count = 0
    for (const interval of result) {
        if (interval)
            count++
    }
    return count
}

// -----------------------------------------------------------------------
// O(n log n) approach.
function sumIntervals(intervals) {
    // Sort the intervals according to the starting number.
    intervals.sort((a, b) => a[0] - b[0])

    let sum = 0
    let start = intervals[0][0]
    let end = intervals[0][1]



    for (let i = 1; i < intervals.length; i++) {
        let intervalStart = intervals[i][0]
        let intervalEnd = intervals[i][1]

        if (intervalStart <= end) {
            end = Math.max(end, intervalEnd)
        } else {
            sum += end - start
            start = intervalStart
            end = intervalEnd
        }
    }
    sum += end - start
    return sum
}

const testArray = [
    [1,4],
    [7, 10],
    [3, 5]
]
console.log(sumIntervals(testArray))