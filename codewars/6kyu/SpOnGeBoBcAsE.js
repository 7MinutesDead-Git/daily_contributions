// https://www.codewars.com/kata/52b757663a95b11b3d00062d/train/javascript
function toWeirdCase(string) {
    const spongebob = []
    let toggle = true

    for (let char of string.split("")) {
        // "start over for each word"
        if (char === " ")
            toggle = false

        char = toggle ? char.toUpperCase() : char.toLowerCase()

        spongebob.push(char)
        toggle = !toggle
    }
    return spongebob.join("")
}