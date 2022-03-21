// https://eloquentjavascript.net/04_data.html#i_8ZspxiCEC/

// The sum of a range.
function range(start, end, step = 1) {
    const result = []
    while (start <= end) {
        result.push(start)
        start += step
    }
    return result
}

function sum(array) {
    return array.reduce((total, num) => total + num)
}

const testArray = range(0, 100, 5)
console.log(testArray)
console.log(sum(testArray))

// Reversing an array.