console.log(capSentence('the tales of scotch!')) // would return 'The Tales Of Scotch!'

function capSentence(sentence: string) {
    const words = sentence.split(" ")

    const result = words.map((word) => {
        return word[0].toUpperCase() + word.slice(1)
    })

    return result.join(" ")
}