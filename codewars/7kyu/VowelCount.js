// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript
function getCount(str) {
    let vowelsCount = 0
    const vowels = "aeiou"
    for (const letter of str) {
        if (vowels.includes(letter))
            vowelsCount++
    }
    return vowelsCount
}