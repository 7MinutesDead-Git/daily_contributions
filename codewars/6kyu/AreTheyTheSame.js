// https://www.codewars.com/kata/550498447451fbbd7600041c/train/javascript
function comp(array1, array2) {
    if (!array1 || !array2)
        return false

    for (let num of array1) {
        const i = array2.indexOf(num ** 2)
        if (i !== -1)
            array2.splice(i, 1)
    }
    return array2.length === 0
}