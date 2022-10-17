console.log(vowelsCounter('anehizxcv')) // will return 3

function vowelsCounter(text: string): number[] {
    const vowels = ['a', 'e', 'i', 'o', 'u']

    let iterativeResult = 0
    for (const letter of text) {
        if (vowels.includes(letter.toLowerCase()))
            iterativeResult++
    }

    const regexResult = text.match(/[aeiou]/gi).length || 0

    return [iterativeResult, regexResult]
}