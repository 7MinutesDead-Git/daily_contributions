// https://leetcode.com/problems/shuffle-an-array/

// Brute-force:
// If we put each number in a "hat" and draw them out at random, the order in which we draw them will define a random ordering.
// Time complexity: O(n^2)
// The quadratic time complexity arises from the calls to box.pop(), which run in linear time.
// n linear array removals occur, which results in a fairly easy quadratic analysis.
// ------------------------------------
class Solution {
    constructor(nums) {
        this.original = nums
        this.random = [...nums]
    }

    reset() {
        return this.original
    }

    shuffle() {
        const box = [...this.random]
        const result = []
        while (box.length > 0) {
            const randomIndex = Math.floor(Math.random() * box.length)
            // Splice will both remove that one element and return it.
            result.push(box.splice(randomIndex, 1))
        }
        return result
    }
}


// Fisher-Yates Algorithm:
// We can cut down the time and space complexities of shuffle with a bit of cleverness -
// Namely, by swapping elements around within the array itself, we can avoid the linear space
// cost of the auxiliary array, and the linear time cost of list modification.
// ------------------------------------
class Solution {
    constructor(nums) {
        this.nums = nums
        this.result = [...nums]
    }

    reset() {
        return this.nums
    }

    shuffle() {
        const length = this.result.length
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * length)
            this.swap(i, randomIndex)
        }
        return this.result
    }

    // We swap the elements at the current index and the chosen index -
    // this simulates drawing (and removing) the element from the hat,
    // as the next range from which we select a random index will not
    // include the most recently processed one.
    swap(a, b) {
        [this.result[a], this.result[b]] = [this.result[b], this.result[a]]
    }
}