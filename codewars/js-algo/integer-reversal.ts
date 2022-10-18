console.log(reverseInteger(-123)) // should return -321

// Reverses a string
function reverseString(text) {
    return [...text].reduce((string, char) => char + string, '')
}

// Reverses an integer
function reverseInteger(num) {
    let reversedNumber = parseInt(reverseString(num.toString()))
    return (reversedNumber * Math.sign(num))
}