// https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
function findOdd(arrayOfIntegers) {
    const counts = {}

    for (const int of arrayOfIntegers) {
        if (counts[int])
            counts[int]++
        else
            counts[int] = 1
    }
    // There will always be only one integer that appears an odd number
    // of times, so we don't need to return any false cases.
    // If we don't prematurely return from this for loop, we've done something wrong.
    for (const num of Object.keys(counts)) {
        if (counts[num] % 2 !== 0) {
            return Number(num)
        }
    }
}