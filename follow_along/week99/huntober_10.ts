/*
Implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:
arrayDiff([1,2,2,2,3],[2]) == [1,3]
arrayDiff([], [4,5]), [], "a was [], b was [4,5]"
arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"
arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"
 */

// Quadratic time complexity
function arrayDiff(a: number[], b: number[]): number[] {
    return a.filter((num) => !b.includes(num))
}

// Linear time complexity
function arrayDiff2(a: number[], b: number[]): number[] {
    const seen = b.reduce((found, num) => {
        found[num] = true
        return found
    }, {})
    return a.filter((num) => !seen[num])
}

// Linear. Set instead of hash map.
function arrayDiff3(a: number[], b: number[]): number[] {
    const seen = new Set(b)
    // Set's "has" lookup is O(1)
    return a.filter((num) => !seen.has(num))
}
