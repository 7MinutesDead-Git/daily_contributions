// https://www.codewars.com/kata/520446778469526ec0000001/train/javascript
// Note: You are given a function isArray(o) that returns
// whether its argument is an array.

/*
    Recursively crawl through each array. Returns final iteration score.
    Adds points to score for each item encountered.
    If item is another array, recursively call this function for that array with the depth value increased.
    Examples:
        Two arrays deep [[1]] means each iteration inside the deepest array is worth 2 points.
        Four arrays deep [[[[1]]]] means each iteration inside the deepest array is worth 4 points.
 */
function arrayCrawler(array, depth = 1, score = 0) {
    for (let i = 0; i < array.length; i++) {
        score += depth
        if (isArray(array[i])) {
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