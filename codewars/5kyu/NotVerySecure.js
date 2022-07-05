// https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript
function alphanumeric(string) {
    // https://stackoverflow.com/a/389022/13627106
    const regex = new RegExp(/^[a-z\d]+$/i)
    return regex.test(string)
}