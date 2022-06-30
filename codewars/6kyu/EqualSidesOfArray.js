const array1 = [20,10,-80,10,10,15,35]
const array2 = [1,2,3,4,3,2,1]
const arrays = [array1, array2]

// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
// TODO: Fix.
function findEvenIndex(arr) {
    let leftTotal = 0
    let rightTotal = 1
    let mid = -1

    while (leftTotal !== rightTotal) {
        mid++
        // Remember that slice end index ends before the given index.
        // Also that leaving out the end index, means the end index will be the very last index.
        leftTotal = arr.slice(0, mid).reduce((a, b) => a + b, 0)
        rightTotal = arr.slice(mid+1).reduce((a, b) => a + b, 0)

        if (mid > arr.length) {
            mid = -1
            break
        }
    }
    return mid
}

for (const array of arrays) {
    console.log(findEvenIndex(array))
}