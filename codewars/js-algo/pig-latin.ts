const vowels = ["a", "e", "i", "o", "u"]

function pigifyWord(word: string) {
    if (vowels.includes(word[0]))
        return `${word}way`

    let consonantClusterEnd = 0
    for (const letter of word) {
        if (vowels.includes(letter))
            break
        consonantClusterEnd++
    }
    const wordArray = [...word]
    const consonantCluster = wordArray.splice(0, consonantClusterEnd)

    return wordArray.join("") + consonantCluster.join("") + "ay"
}

function pigLatin(sentence: string) {
    let result = ""

    for (const word of sentence.split(" ")) {
        result += `${pigifyWord(word)} `
    }
    return result.trim()
}

console.log(pigLatin("pig latin is cool")); // igpay atinlay isway oolcay