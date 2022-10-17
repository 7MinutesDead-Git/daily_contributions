type Range = [number, number];

export function subarraySort(array: number[]): Range {
    // These could also be initialized as infinity to eliminate null checks below.
    // ie: smallestOutOfOrder = Infinity
    //     largestOutOfOrder = -Infinity
    let smallestUnsorted = null
    let largestUnsorted = null
    const result: Range = [-1, -1]

    // First we'll iterate through the array and identify our immediately unsorted numbers.
    // We can keep track of which ones are largest and smallest in the same pass.
    for (const [i, num] of array.entries()) {
        const previous: number | undefined = array[i-1]
        const next: number | undefined = array[i+1]
        // This means the current number is sorted with respect to its neighbors.
        if (num >= previous && num <= next) {
            continue
        }
        // This means we found one that might be our smallest unsorted.
        if (num < previous && (smallestUnsorted === null || num < smallestUnsorted)) {
            smallestUnsorted = num
        }
        // This means we found one that might be our largest unsorted.
        else if (num > next && (largestUnsorted === null || num > largestUnsorted)) {
            largestUnsorted = num
        }
    }

    // If we found our smallest and largest unsorted, now we can compare them to each number in
    // the original array and see where they belong; grab their indices so we can return our subarray answer.

    // Iterate up for smallest insertion index, stop once we find it.
    // This defines the start of our actual unsorted subarray.
    if (smallestUnsorted) {
        for (const [i, smallNum] of array.entries()) {
            if (smallestUnsorted < smallNum) {
                result[0] = i
                break
            }
        }
    }
    // Iterate backwards for largest insertion (maximizes odds we can cut the for loop short/early).
    // This defines the end of our actual unsorted subarray.
    if (largestUnsorted) {
        for (let i = array.length - 1; i >= 0; i--) {
            if (largestUnsorted > array[i]) {
                result[1] = i
                break
            }
        }
    }
    // Return the result. If we never found a largest or smallest unsorted, then result[0] or result[1]
    // will still be -1 from when it was initialized.
    return result
}


// Same function as above, just swapping out null for Infinity starting values.
export function swapNullForInfinity(array: number[]): Range {
    let smallestUnsorted = Infinity
    let largestUnsorted = -Infinity
    const result: Range = [-1, -1]

    for (const [i, num] of array.entries()) {
        const previous: number | undefined = array[i - 1]
        const next: number | undefined = array[i + 1]
        // This means the current number is sorted with respect to its neighbors.
        if (num >= previous && num <= next) {
            continue
        }
        // Note simplification here instead of needing null checks:
        if (num < previous && num < smallestUnsorted) {
            smallestUnsorted = num
        }
        // Note simplification here instead of needing null checks:
        else if (num > next && num > largestUnsorted) {
            largestUnsorted = num
        }
    }
    // Note simplification here instead of needing null checks:
    for (const [i, smallNum] of array.entries()) {
        if (smallestUnsorted < smallNum) {
            result[0] = i
            break
        }
    }
    // Note simplification here instead of needing null checks:
    for (let i = array.length - 1; i >= 0; i--) {
        if (largestUnsorted > array[i]) {
            result[1] = i
            break
        }
    }
    // Return the result. If we never found a largest or smallest unsorted, then result[0] or result[1]
    // will still be -1 from when it was initialized.
    return result
}