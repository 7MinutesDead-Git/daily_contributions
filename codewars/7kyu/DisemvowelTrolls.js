// https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
function disemvowel(str) {
    const vowels = 'aeiou'
    let result = ""
    for (const letter of str) {
        if (vowels.includes(letter.toLowerCase()))
            continue
        result += letter
    }

    return result
}