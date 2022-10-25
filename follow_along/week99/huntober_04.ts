// Return the number of unique arrays that can be formed by picking exactly one element from each subarray.
// For example: solve([[1,2],[4],[5,6]]) = 4,
// because it results in only 4 possibilites:
// [1,4,5], [1,4,6], [2,4,5], [2,4,6]


console.log(solve([[1, 2], [4], [5, 6]])); // 4
console.log(solve([[1, 2], [4, 4], [5, 6, 6]])); // 4
console.log(solve([[1, 2], [3, 4], [5, 6]])); // 8
console.log(solve([[1, 2, 3], [3, 4, 6, 6, 7], [8, 9, 10, 12, 5, 6]])); // 72


function solve(matrix: number[][]): number {
    // Remove duplicates
    const sets = matrix.map((subarray) => {
        return new Set(subarray)
    })
    // Then we can multiply the lengths of each set to get the total combinations.
    return sets.reduce((uniqueCount, set) => {
        uniqueCount *= set.size
        return uniqueCount
    }, 1)
}


// You have an array full of arrays.
// Map through the parent array and make sure each sub array is a set aka no duplicate numbers.
// Once each sub array contains no duplicates,
// you can just reduce by multiplying the length of each sub array together to get the total combinations.
// But how? Look at how permutations are formed, once duplicates are removed.
// [[1,2], [4], [5,6]]
//   1 ->   4 -> 5    [1, 4, 5]
//   1 ->   4 ->   6  [1, 4, 6]
//     2 -> 4 -> 5    [2, 4, 5]
//     2 -> 4 ->   6  [2, 4, 6]
// We have to go through each number once to form a new combo, so really we're just multiplying the lengths.