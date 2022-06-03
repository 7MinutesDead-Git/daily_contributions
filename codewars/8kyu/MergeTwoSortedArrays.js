// https://www.codewars.com/kata/5899642f6e1b25935d000161/train/javascript
function mergeArrays(arr1, arr2) {
    const result = [...new Set(arr1.concat(arr2))]
    return result.sort((a, b) => a - b)
}