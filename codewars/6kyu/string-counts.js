// https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript
function count (string) {
    return string.split("").reduce((count, letter) => {
        count[letter] ? count[letter]++ : count[letter] = 1
        return count
    }, {})
}