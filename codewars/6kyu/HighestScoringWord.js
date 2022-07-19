// https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript
function high(x) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const words = x.split(" ")
    const scores = []

    for (const word of words) {
        let score = 0
        for (const letter of word) {
            score += alphabet.indexOf(letter) + 1
        }
        scores.push([score, word])
    }

    let highest = [0, ""]
    for (const score of scores) {
        if (score[0] > highest[0])
            highest = score
    }
    return highest[1]
}