// Count all the occurring characters in a string.
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

type Counts = {
    [key: string]: number
}
function count(input: string): Counts {
    const counts: Counts = {}

    input.split("").reduce((count, char) => {
        count[char] ? count[char]++ : count[char] = 1
        return count
    }, counts)

    return counts
}

console.log(count("aba"))
console.log(count("112233"))
console.log(count(""))