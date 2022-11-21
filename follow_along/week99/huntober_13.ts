// Your task is to remove all consecutive duplicate words from a string,
// leaving only first words entries. For example:
// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
// --> "alpha beta gamma delta alpha beta gamma delta"

// Imperative
function removeConsecutives(input: string): string {
    const arr = input.split(" ").filter((word, i, array) => {
        return word !== array[i+1]
    })
    return arr.join(" ")
}

// Declarative
function removeDeclarative(input: string): string {
    const result: string[] = []
    const array = input.split(" ")

    for (const [i, word] of array.entries()) {
        if (word === array[i+1])
            continue
        result.push(word)
    }
    return result.join(" ")
}

const test = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

console.log(removeConsecutives(test))
console.log(removeDeclarative(test))
