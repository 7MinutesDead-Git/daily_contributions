// An ordered sequence of numbers from 1 to N is given.
// One number might have deleted from it, then the remaining numbers were mixed.
// Find the number that was deleted.

// This would be necessary of input arrays could be of any type.

function findDeletedNumber(numArray: number[], mixedArray: number[]): number {
    if (numArray.length === mixedArray.length) {
        return 0
    }
    mixedArray.sort((a, b) => a - b)
    for (const [i, num] of numArray.entries()) {
        if (mixedArray[i] !== num) {
            return num
        }
    }
    return 0
}

// Since the array is only ever made of numbers, and we only need to find one missing number,
// really that's just the difference in sums between the two arrays. No sorting needed.
function findDeletedNumberSumTrick(numArray: number[], mixedArray: number[]): number {
    if (numArray.length === mixedArray.length) {
        return 0
    }
    const numArraySum = numArray.reduce((a, b) => a + b, 0)
    const mixedArraySum = mixedArray.reduce((a, b) => a + b, 0)
    return numArraySum - mixedArraySum
}