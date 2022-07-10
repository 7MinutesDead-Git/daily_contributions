// https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript
// Felt a lot more difficult than 6kyu haha.
function sortArray(array) {
    let odds = []
    const indexes = []
    let p = 0

    // Loop through array.
    // Save odds and their indices in separate arrays.
    for (const [index, num] of array.entries()) {
        if (num % 2 !== 0) {
            odds.push(num)
            indexes.push(index)
        }
    }

    // To sort the odd number array, we need to use Int32Array().
    // Sorting numbers in js sorts as strings by default. 8^)
    // Typed arrays are also much faster than default arrays for sorting numbers.
    odds = new Int32Array(odds)
    odds.sort()

    // Loop through odds and indexes together with pointer.
    // Insert odds back into array at original indices.
    while (p < odds.length) {
        const i = indexes[p]
        const oddNum = odds[p]
        array[i] = oddNum
        p++
    }
    return array
}