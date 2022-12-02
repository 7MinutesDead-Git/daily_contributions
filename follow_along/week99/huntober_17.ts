// Given a string of characters as input, write a function that returns it with the characters reversed.
// No Reverse Method (well brute force it first, but then no reverse method)!

function reverseString(input: string): string {
    const result = []
    for (let i = input.length -1; i >= 0; i--) {
        result.push(input[i])
    }
    return result.join("")
}

function reverseStringWhile(input: string): string {
    const result = []

    let i = input.length - 1
    while (i >= 0) {
        result.push(input[i])
        i--
    }
    return result.join("")
}

console.log(reverseString("abcdefg"))
console.log(reverseStringWhile("abcdefg"))
console.log(reverseString("a"))
console.log(reverseStringWhile("a"))
console.log(reverseString(""))
console.log(reverseStringWhile(""))
console.log(reverseString("Oh very nice"))
console.log(reverseStringWhile("Oh very nice"))