export function spinWords(words: string): string {
    const wordsArray = words.split(" ")
    const result: string[] = []

    for (const word of wordsArray) {
        if (word.length > 4) {
            result.push(word.split("").reverse().join(""))
        }
        else {
            result.push(word)
        }
    }
    return result.join(" ").trim()
}