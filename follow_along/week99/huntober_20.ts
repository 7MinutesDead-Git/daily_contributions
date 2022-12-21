// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times.
// You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function getMajority(nums: number[]): number {
    const counts = nums.reduce((count, num) => {
        count[num] ? count[num]++ : count[num] = 1
        return count
    }, {})

    let result = 0
    let highestCount = 0

    for (const num in counts) {
        // Since we can assume the majority always exists,
        // we don't need to check if the count is greater than n/2.
        if (counts[num] > highestCount) {
            highestCount = counts[num]
            result = Number(num)
        }
    }
    return result
}

// Single loop solution that can return early as soon as we encounter a majority,
// since for this problem, there being one majority is a guarantee.
function getMajorityClever(nums: number[]): number {
    const counts = new Map()
    const majorityThreshold = nums.length / 2

    for (const num of nums) {
        counts.set(num, counts.get(num) + 1 || 1)
        if (counts.get(num) > majorityThreshold) {
            return num
        }
    }
    return 0
}

console.log(getMajority([3, 2, 3]))
console.log(getMajority([]))
console.log(getMajority([2, 2, 1, 1, 1, 2, 2]))
console.log(getMajority([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))
console.log(getMajorityClever([3, 2, 3]))
console.log(getMajorityClever([]))
console.log(getMajorityClever([2, 2, 1, 1, 1, 2, 2]))
console.log(getMajorityClever([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10]))