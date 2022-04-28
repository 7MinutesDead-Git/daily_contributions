// https://www.codewars.com/kata/54521e9ec8e60bc4de000d6c/train/javascript
// If this kth element is part of our maximum subarray, what will be special about it?
// It will either be:
//   - greater than the sum of elements till k-1
//   - the max sum till k-1 + kth element will be greater.

// The maximum subarray sum for this array ending at kth element is
// effectively the maximum subarray sum of the array till
// k-1th element + the kth element (if the kth element is positive).

function maxSubArraySum(array) {
    let currentSum = array.shift()
    let maxSum = 0

    for (const num of array) {
        currentSum = Math.max(num, currentSum + num)
        maxSum = Math.max(maxSum, currentSum)
    }
    return maxSum
}

const test = [ 7, 4, 11, -11, 39, 36, 10, -6, 37, -10, -32, 44, -26, -34, 43, 43 ]
console.log(maxSubArraySum(test))