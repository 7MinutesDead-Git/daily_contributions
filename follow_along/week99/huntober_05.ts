// Given an array of integers, find the nth smallest element in this array of integers.
// - Array size is at least 3.
// - Numbers could be a mixture of positives, negatives and zeros.
// - Don't remove duplicates.
//
// nthSmallest({3,1,2} ,2) ==> return (2)
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7)
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92)

function nthSmallest(array: number[], target: number): number {
    return array.sort((a, b) => a - b)[target-1]
}