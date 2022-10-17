export function mergeOverlappingIntervals(array: number[][]) {
    // Since we *have* to sort, we won't be able to get better than O(n log(n)) time.
    // Space complexity is O(n) since we need the result array.
    array.sort((a, b) => {
        return a[0] - b[0]
    })
    // We'll start by adding the first subarray into our result array.
    // This is because we're going to be using this "current" subarray to always
    // build or keep track of the last interval, from within result array.
    let current = array[0]
    // Passing in an array into results array, means it's always a reference to "current". Very important!
    const result = [current]

    for (const next of array) {
        // We're always going to be comparing to the last subarray we added to result array,
        // rather than comparing to current and next in the input array (a lot easier).

        // TECHNICALLY this assignment here isn't necessary since we still have a reference to
        // "current" inside of result. But I was getting confused, so this helps clarify to me what "current"
        // is referencing.. Current will always end up as the last subarray in result due to the logic below.
        // So, you could completely remove this line and everything still works.
        current = result[result.length-1]  // result.at(-1) with ECMAScript 2022

        if (current[1] >= next[0]) {
            // Again, assignment of current[1] here means assignment in result[current[1]],
            // because that subarray (current) is still being passed around by reference.
            // We are modifying the original current directly.
            current[1] = Math.max(current[1], next[1])
        }
        else {
            // Now that we've completed an interval, we'll pass in the next subarray from array,
            // and we'll start modifying that going forward.
            // This makes "current" a new reference whose value is grabbed from this for loop (next),
            // so that means we leave the old "current" reference and consequently permanently part of result.
            current = next
            result.push(current)
        }
    }
    return result
}

export function aboveWithNoComments(array: number[][]) {
    array.sort((a, b) => {
        return a[0] - b[0]
    })
    let current = array[0]
    const result = [current]

    for (const next of array) {
        // current = result[result.length-1]

        if (current[1] >= next[0]) {
            current[1] = Math.max(current[1], next[1])
        }
        else {
            current = next
            result.push(current)
        }
    }
    return result
}
