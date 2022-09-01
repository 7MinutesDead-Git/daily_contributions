// https://www.codewars.com/kata/5727bb0fe81185ae62000ae3/train/javascript
function cleanString(s) {
    const result = []

    // Note to self after the fact:
    // Don't need to split a string into an array to iterate over it in js.
    for (const char of s.split("")) {
        if (char === "#")
            result.pop()
        else
            result.push(char)
    }
    return result.join("")
}