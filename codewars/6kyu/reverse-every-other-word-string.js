// https://www.codewars.com/kata/58d76854024c72c3e20000de/train/javascript
function reverse(str) {
    let result = []
    let word = ""
    let toggle = true

    for (const char of str) {
        if (char === " ") {
            result.push(`${word} `)
            word = ""
            toggle = !toggle
        }
        else {
            const even = result.length % 2 === 0
            word = even && toggle ? word + char : char + word
        }
    }
    result.push(word)
    return result.join("").trim()
}