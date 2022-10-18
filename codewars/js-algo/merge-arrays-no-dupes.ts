// Impure function!
function addToSet(array: number[], set: Set<number>) {
    for (const num of array) {
        set.add(num)
    }
}

function mergeArrays(...arrays: number[][]) {
    const result = new Set<number>()

    for (const array of arrays) {
        addToSet(array, result)
    }
    return [...result]
}

// should return [1,2,3,4,5]
console.log(mergeArrays([1,2,3,3,3], [1,4,5,2]))
// should return [1,2,3,4,5,6,7,8,9,10]
console.log(mergeArrays([1,2,3,3,3], [1,4,5,2], [1,2,3,4,5,6,7,8,9,10]))