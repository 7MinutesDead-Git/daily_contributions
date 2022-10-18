// should return 1 because it is greater than 1(index 0), but less than 2(index 1).
console.log(whereIBelong([1,2,3,4], 1.5))
console.log(whereIBelong([3, 6, 7, 7, 8], 7)) // 2

// Assuming input array is sorted.
function whereIBelong(array: number[], value: number) {
    let result = 0
    for (const num of array) {
        if (value <= num) {
            return result
        }
        result++
    }
}