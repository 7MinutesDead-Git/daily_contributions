// An ordered sequence of numbers from 1 to N is given.
// One number might have deleted from it, then the remaining numbers were mixed.
// Find the number that was deleted.

// O(n log n) from sorting.
function findDeletedNumber(numArray: number[], mixedArray: number[]): number {
    // O(1) guard
    if (numArray.length === mixedArray.length) {
        return 0
    }
    // O(n log n) sort
    mixedArray.sort((a, b) => a - b)

    // O(n) concurrent loop
    for (const [i, num] of numArray.entries()) {
        if (mixedArray[i] !== num) {
            return num
        }
    }
    return 0
}

// Since the array is only ever made of numbers, and we only need to find one missing number,
// really that's just the difference in sums between the two arrays. No sorting needed.
// O(n)
function findDeletedNumberSumTrick(numArray: number[], mixedArray: number[]): number {
    // O(1) guard
    if (numArray.length === mixedArray.length) {
        return 0
    }
    // O(n) reduces
    const numArraySum = numArray.reduce((a, b) => a + b, 0)
    const mixedArraySum = mixedArray.reduce((a, b) => a + b, 0)
    // O(1) diff
    return numArraySum - mixedArraySum
}

// Still O(n) since we'll need to loop through both arrays once.
function findDeletedNumberHashMap(numArray: number[], mixedArray: number[]): number {
    // O(1) guard
    if (numArray.length === mixedArray.length) {
        return 0
    }
    // O(n) building map
    const seen = mixedArray.reduce((found, num) => {
        found[num] = true
        return found
    }, {})

    // O(n) checking original array
    for (const num of numArray) {
        // O(1) lookup
        if (!seen[num])
            return num
    }
    return 0
}

const inputA = [1, 2, 3, 4, 5]
const inputB = [3, 4, 1, 5] // 2

const inputC = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const inputD = [1, 9, 7, 4, 6, 2, 3, 8] // 5

const inputE = [1, 2, 3, 4]
const inputF = [2, 3, 4] // 1

const inputG = [1, 2, 3]
const inputH = [1, 2, 3] // 0

const inputI = []
const inputJ = [] // 0

const funcs = [findDeletedNumber, findDeletedNumberSumTrick, findDeletedNumberHashMap]

for (const func of funcs) {
    console.log(func(inputA, inputB))
    console.log(func(inputC, inputD))
    console.log(func(inputE, inputF))
    console.log(func(inputG, inputH))
    console.log(func(inputI, inputJ))
    console.log("------")
}