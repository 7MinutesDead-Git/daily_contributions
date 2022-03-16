// https://www.codewars.com/kata/56a5d994ac971f1ac500003e/train/javascript
function longestConsec(strarr, k) {
    // If the array isn't even long enough to get all the required strings, we know the result will be empty.
    if (k > strarr.length)
        return ''

    let result = ''
    let longest = 0

    for (let i = 0; i < strarr.length; i++) {
        // Reset our string we're building each iteration.
        let currentString = ''
        // Build the current string with an inner k-limited loop that moves forward from i.
        for (let builder = i; builder < k+i; builder++) {
            // If our builder pointer has exceeded the end of the array then we can't continue looking for a longer string.
            if (!strarr[builder])
                return result
            currentString += strarr[builder]
        }
        if (currentString.length > longest) {
            result = currentString
            longest = currentString.length
        }
    }
    return result
}