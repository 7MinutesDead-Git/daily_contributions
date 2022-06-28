// https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript
function order(words) {
    const array = words.split(" ")
    const positions = []

    for (const word of array) {
        for (const char of word) {
            if (Number(char)) {
                positions[char] = word
            }
        }
    }

    return positions.join(" ").trim()
}