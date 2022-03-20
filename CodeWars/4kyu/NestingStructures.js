// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
// Note: You are given a function isArray(o) that returns
// whether its argument is an array.

/*
    Recursively crawl through each array. Returns final iteration score.
    Adds a point to score for each item encountered.
    If item is another array, recursively call this function into that array with depth value increased.
    This means for each level of array depth, the iterative score value will increase by 1.
    Examples:
        Two arrays deep [[1]] means each iteration inside the deepest array is worth 2 points.
        Four arrays deep [[[[1]]]] means each iteration inside the deepest array is worth 4 points.
 */
function arrayCrawler(array, depth = 1, score = 1) {
    for (let i = 0; i < array.length; i++) {
        // At a base depth of one, this adds 1 point for each item passed over.
        score += depth
        if (isArray(array[i])) {
            // Before diving into a nested array, increase depth so this array's score
            // is worth more than the parent array for each item passed over.
            depth++
            return arrayCrawler(array[i], depth, score)
        }
    }
    return score
}

Array.prototype.sameStructureAs = function (other) {
    if (!isArray(other))
        return false
    return arrayCrawler(other) === arrayCrawler(this)
}

const array1 = [1, [1, 1]]
const array2 = [[[2, 2]]]