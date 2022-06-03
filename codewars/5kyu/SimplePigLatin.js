function pigIt(str){
    const words = str.split(" ")
    let result = []

    for (const word of words) {
        const array = [...word]
        const currentWord = array.shift()
        // Since special characters are space separated, we know they'll be their own words.
        // So if they don't pass this regex of being a word with alphanumeric characters,
        // don't add "ay" to it.
        if ((/^\w+$/i).test(currentWord))
            array.push(currentWord, "ay")
        else
            array.push(currentWord)

        result.push(array.join(""))
    }
    return result.join(" ")
}