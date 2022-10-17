function palindromeChecker(text: string) {
    let left = 0
    let right = text.length - 1

    while (left <= right) {
        if (text[left] !== text[right]) {
            return false
        }
        left++
        right--
    }
    return true
}

const tests = [
    "kayak",
    "racecar",
    "aibohphobia",
    "amanaplanacanalpanama",
    "amanaplanacanalpandemonium", // false
]

for (const test of tests) {
    console.log(test)
    console.log(palindromeChecker(test))
}