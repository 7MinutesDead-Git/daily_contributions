// https://www.codewars.com/kata/54a91a4883a7de5d7800009c/train/javascript
function incrementString (strng) {
    const numberRegex = /\d+/
    let number = strng.match(numberRegex)
    const word = strng.replace(number, '')

    if (!number) {
        return `${word}1`
    }

    const numLength = number.toString().length
    number = (parseInt(number, 10) + 1).toString()

    // This is so we can maintain any leading zeros present.
    while (number.length < numLength) {
        number = `0${number}`
    }
    return `${word}${number}`
}