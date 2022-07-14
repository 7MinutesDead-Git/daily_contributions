// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/727/
let removeDuplicates = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) {
            nums.splice(i, 1)
            i--
        }
    }
    return nums
}

console.log(removeDuplicates([1, 1, 2]))