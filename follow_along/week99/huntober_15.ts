// Your job is to figure out the index of which vowel is missing from a given string:

// A has an index of 0,
// E has an index of 1,
// I has an index of 2,
// O has an index of 3,
// U has an index of 4.
// Notes: There is no need for string validation and every sentence given will
// contain all vowles but one. Also, you won't need to worry about capitals.

// Examples
// "John Doe hs seven red pples under his bsket"          =>  0  ; missing: "a"
// "Bb Smith sent us six neatly arranged range bicycles"  =>  3  ; missing: "o"

const vowelIndices = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4
}

function missingVowelIndex(sentence: string): number {
    const counts = sentence.split("").reduce((count, char) => {
        count[char] ? count[char]++ : count[char] = 1
        return count
    }, {})

    for (const letter in vowelIndices) {
        if (!counts[letter])
            return vowelIndices[letter]
    }
    return 0
}

console.log(missingVowelIndex("John Doe hs seven red pples under his bsket"))
console.log(missingVowelIndex("Bb Smith sent us six neatly arranged range bicycles"))
