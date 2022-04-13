// https://www.codewars.com/kata/5526fc09a1bbd946250002dc/train/javascript
function findOutlier(integers){
    let evenCount = 0
    let oddCount = 0
    let lastEven = null
    let lastOdd = null

    // This will generally be fast since we don't need to iterate through the entire array.
    // All we need to do is encounter 2 evens and 1 odd (outlier), or vice versa.
    // Worst case is still O(n) though since the outlier could be at the very end.
    for (const num of integers) {
        if (num % 2 === 0) {
            evenCount++
            lastEven = num
        }
        else {
            lastOdd = num
            oddCount++
        }

        if (oddCount > 1 && lastEven !== null)
            return lastEven
        else if (evenCount > 1 && lastOdd !== null)
            return lastOdd
    }
}