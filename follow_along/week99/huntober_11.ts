// You need to create a function that when provided with a triplet,
// returns the index of the numerical element that lies between the other two elements.

// The input to the function will be an array of three distinct numbers.
// For example:
// gimme([2, 3, 1]) => 0
// 2 is the number that fits between 1 and 3 and the index of 2 in the input array is 0.

// Another example (just to make sure it is clear):
// gimme([5, 10, 14]) => 1
// 10 is the number that fits between 5 and 14 and the index of 10 in the input array is 1.

// Since it's only ever 3 numbers, time complexity really doesn't matter.
// O(n log n) from sorting, but N is always 3, so it's tiny.
function gimme(input: number[]): number {
    // sort() is in place, so spread a copy..
    const sorted = [...input].sort((a, b) => a - b)
    // Because we'll need to check the original array after to get the index.
    return input.indexOf(sorted[1])
}