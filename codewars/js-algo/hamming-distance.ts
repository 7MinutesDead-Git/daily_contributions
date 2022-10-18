// The hamming distance between two strings of equal length is the number of positions
// at which these strings vary. In more technical terms, it is a measure of the minimum
// number of changes required to turn one string into another.

console.log(hammingDistance('rover', 'river')) // should return 1
console.log(hammingDistance('rover', 'rover')) // should return 0
console.log(hammingDistance('bunny', 'boxxy')) // should return 3

function hammingDistance(a: string, b: string) {
    let result = 0

    for (const [i, char] of [...a].entries()) {
        if (char !== b[i])
            result++
    }
    return result
}
