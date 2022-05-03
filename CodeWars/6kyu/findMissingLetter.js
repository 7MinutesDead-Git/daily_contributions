function search(alphabet, array) {
    const firstLetter = array[0]
    let upperPointer = alphabet.indexOf(firstLetter)
    let arrayPointer = 0

    for (upperPointer; upperPointer < alphabet.length; upperPointer++) {
        if (alphabet[upperPointer] !== array[arrayPointer]) {
            return alphabet[upperPointer]
        }
        arrayPointer++
    }
}

function findMissingLetter(array) {
    const lower = "abcdefghijklmnopqrstuvwxyz"
    const upper = lower.toUpperCase()
    const firstLetter = array[0]

    if (firstLetter === firstLetter.toUpperCase()) {
        return search(upper, array)
    }
    return search(lower, array)
}


const testArray = ["a", "b", "c", "d", "f"] // e
console.log(findMissingLetter(testArray))