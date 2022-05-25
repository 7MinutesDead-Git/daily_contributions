// https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript
// I'm kinda proud of this one!
function rot13(message) {
    const alphabet = [...'aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ']
    const input = [...message]
    const result = []

    for (const char of input) {
        let index = alphabet.indexOf(char)

        if (index === -1)
            result.push(char)
        else {
            const encodedIndex = (index + 26) % alphabet.length
            result.push(alphabet[encodedIndex])
        }
    }
    return result.join("")
}