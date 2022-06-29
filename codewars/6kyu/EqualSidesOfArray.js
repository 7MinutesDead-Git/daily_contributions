const testArray = [20,10,-80,10,10,15,35]

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// TODO: Fix.
function findEvenIndex(arr) {
    let leftTotal = 0
    let rightTotal = 1
    let mid = 0

    while (leftTotal !== rightTotal) {
        // Remember that slice end index ends before the given index.
        // Also that leaving out the end index, means the end index will be the very last index.
        leftTotal = arr.slice(0, mid).reduce((a, b) => a + b, 0)
        rightTotal = arr.slice(mid+1).reduce((a, b) => a + b, 0)

        if (mid > arr.length) {
            mid = -1
            break
        }
        mid++
    }
    return mid
}

console.log(findEvenIndex(testArray))