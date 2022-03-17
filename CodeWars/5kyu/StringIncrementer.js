// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
function incrementString (strng) {
    const numberRegex = /\d+/
    let number = strng.match(numberRegex)
    const word = strng.replace(number, '')

    if (!number) {
        return `${word}1`
    }

    const numLength = number.toString().length
    // We need to explicitly declare base 10 or javascript defaults to base 8 for numbers with leading zeros.
    number = (parseInt(number, 10) + 1).toString()
    // This is so we can maintain any leading zeros that should still be present after incrementing.
    while (number.length < numLength) {
        number = `0${number}`
    }
    return `${word}${number}`
}