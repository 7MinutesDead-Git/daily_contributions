// https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript
const testArray = [
    9, 0, 0, 9, 1, 2, 0,
    1, 0, 1, 0, 3, 0, 1,
    9, 0, 0, 0, 0, 9
]
const testArrayTwo = [
    9, 0, 0, 9, 1, 2, 0,
    1, 0, 1, 0, 3, 0, 1,
    9, 0, 0, 0, 0, 9
]

// --------------------------------------------------------
function forLoopModify(array) {
    const startingLength = array.length
    let count = 0
    for (let i = 0; count < startingLength; i++) {
        if (array[i] === 0) {
            array.push(array[i])
            array.splice(i, 1)
            i--
        }
        count++
    }
    // The array is passed in by reference and modified in place, so doesn't necessarily need to be returned here.
    return array
}
console.log(forLoopModify(testArray))

// --------------------------------------------------------
function whileLoopModify(array) {
    let i = 0
    let count = 0
    const startingLength = array.length
    while (count < startingLength) {
        if (array[i] === 0) {
            // One liner version of pushing then splicing.
            // Splice returns an array if return value is used, so we can conver to number directly since it's 1 item.
            array.push(Number(array.splice(i, 1)))
            i--
        }
        i++
        count++
    }
    // The array is passed in by reference and modified in place, so doesn't necessarily need to be returned here.
    return array
}
console.log(whileLoopModify(testArrayTwo))