// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029/train/javascript
function wave(str) {
    const waveArray = []
    waveArray.length = str.length
    // [str, str, str]
    waveArray.fill(str)

    // [Str, sTr, stR]
    const result = waveArray.map((word, index) => {
        const waveWord = Array.from(word)
        if (waveWord[index] !== " ") {
            waveWord[index] = waveWord[index].toUpperCase()
            return waveWord.join("")
        }
    })
    // Removes anything undefined in the array (skipped-over whitespace entries).
    return result.filter(word => word)
}