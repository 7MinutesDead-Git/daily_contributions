// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
//
// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// Example 1:
// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.

// Example 2:
// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.

// Example 3:
// Input: n = 4
// Output: 3


function fibonacciArray(n: number): number {
    let output = [0, 1]

    for (let i = 2; i <= n; i++) {
        output[i] = output[i - 1] + output[i - 2]
    }
    return output[n]
}


function fibonacciThreePointers(n: number): number {
    let first = 0
    let second = 1
    let current = null

    for (let i = 2; i <= n; i++) {
        current = first + second
        first = second
        second = current
    }
    return current
}


console.log(fibonacciArray(10))
console.log(fibonacciThreePointers(10))