// https://www.codewars.com/kata/517abf86da9663f1d2000003/train/javascript
function toCamelCase(str) {
    const delimiters = ['_', '-']
    const replaceWindow = 2
    str = [...str]

    for (let i = 0; i < str.length; i++) {
        const char = str[i]

        if (delimiters.includes(char)) {
            const nextChar = str[i+1].toUpperCase()
            str.splice(i, replaceWindow, nextChar)
            i -= replaceWindow
        }
    }
    return str.join("")
}