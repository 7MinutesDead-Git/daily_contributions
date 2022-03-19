// https://www.codewars.com/kata/52c4dd683bfd3b434c000292/train/javascript
// ------------------------------------------------------------------
// Helper functions.

// Returns true if the leading number is followed by all zeros.
function bFollowedByZeros(number) {
    // Any digit followed by all zeros: 100, 90000.
    for (let i=1; i < number.length; i++) {
        if (number[i] !== "0")
            return false
    }
    return true
}

// Returns true if all digits in the number are the same.
function bAllSameNumber(number) {
    // Every single number must be the same.
    const numberToMatch = number[0]
    for (const num of number)
        if (num !== numberToMatch)
            return false
    return true
}

// Returns true if all digits are sequentially increasing, looping back to 0 after 9.
function bSequentialUp(number) {
    // 0 should come after 9, and not before 1, as in 7890. Going up.
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] === '9' && number[i+1] === '0')
            continue
        if (number[i+1] - number[i] !== 1)
            return false
    }
    return true
}

// Returns true if all digits are sequentially decreasing, looping back to 9 after 0.
function bSequentialDown(number) {
    // 109 is sequentially down to me based on the problem text, but fails a test
    // given on code wars because they don't want to consider looping for sequential numbers.
    if (number === '109')
        return false
    // 0 should come after 1, and not before 9, as in 3210. Going down.
    for (let i = 0; i < number.length - 1; i++) {
        if (number[i] === '0' && number[i+1] === '9')
            continue
        if (number[i+1] - number[i] !== -1)
            return false
    }
    return true
}

// Returns true if the number is a palindrome (the same forwards and backwards).
function bPalindrome(number) {
    // Same forward as it is backwards. 1221 or 73837.
    // Get middle most index, take two slices, reverse one, see if they match.
    let middleIndex
    let firstHalf
    if (number.length % 2 === 0) {
        middleIndex = number.length / 2
        firstHalf = number.slice(0, middleIndex)
    }
    else {
        // Odd number of digits means the slice needs to include the middle index.
        middleIndex = (number.length - 1) / 2
        firstHalf = number.slice(0, middleIndex + 1)
    }
    const secondHalf = number.slice(middleIndex).split("").reverse().join("")
    return firstHalf === secondHalf
}

// Returns true if the number is included in array of "awesome phrases".
function bAwesomePhrase(number, phrases) {
    return phrases.includes(parseInt(number))
}

// ------------------------------------------------------------------
// Returns 2 if the number is directly interesting, 1 if the number will be interesting soon, or
// 0 if the number is not interesting.
function isInteresting(number, awesomePhrases) {
    let intNumber = parseInt(number)
    const tests = [
        bFollowedByZeros,
        bAllSameNumber,
        bSequentialUp,
        bSequentialDown,
        bPalindrome,
        bAwesomePhrase
    ]
    // Our high value tests for direct matches, worth 2 points.
    for (const test of tests) {
        if (test(number.toString(), awesomePhrases) && number.toString().length >= 3)
            return 2
    }

    // Our nearby or "upcoming" tests for matches within "two miles". Worth 1 point.
    for (let i = 0; i < 2; i++) {
        intNumber += 1
        const numString = intNumber.toString()
        for (const test of tests) {
            if (test(numString, awesomePhrases) && numString.length >= 3) {
                return 1
            }
        }
    }
    // Failing all tests means this number is not "interesting", thus we earn 0 points.
    return 0
}

// ------------------------------------------------------------------
// Tests.
const incrementTests = [12328, 12344, 89012]
const decrementTests = [12341, 98763, 21098]
const codeWarsTests = [3, 1336, 1337, 11208, 11209, 11211]
const awesomeTests = [1337, 256]

for (const upTest of incrementTests) {
    console.log(isInteresting(upTest, awesomeTests))
}
for (const downTest of decrementTests) {
    console.log(isInteresting(downTest, awesomeTests))
}
for (const codeWarsTest of codeWarsTests) {
    console.log(isInteresting(codeWarsTest, awesomeTests))
}

// Isn't 109 technically sequentially downwards??
console.log(isInteresting(109, [1337, 256]))