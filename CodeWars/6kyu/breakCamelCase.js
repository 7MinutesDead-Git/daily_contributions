// https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript
function solution(string) {
    let result = ''
    for (let letter of string) {
        if (letter === letter.toUpperCase())
            letter = ` ${letter}`
        result += letter
    }
    return result
}
