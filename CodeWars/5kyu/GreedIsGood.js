// https://www.codewars.com/kata/5270d0d18625160ada0000e4/train/javascript
function getCounts(data) {
    return data.reduce((count, roll) => {
        if (count[roll])
            count[roll]++
        else
            count[roll] = 1
        return count
    }, {})
}

function getOneScores(count) {
    const scores = []
    while (count) {
        if (count >= 3) {
            scores.push(1000)
            count -= 3
            continue
        }
        scores.push(100)
        count--
    }
    return scores
}

function score( dice ) {
    const counts = getCounts(dice)
    const scores = []

    for (const num in counts) {
        const bigScore = counts[num] >= 3

        if (num === "1" && bigScore) {
            const oneScores = getOneScores(counts[num])
            scores.push(...oneScores)
        }
        else if (bigScore) {
            scores.push(Number(num) * 100)
        }
        else if (num === "1") {
            scores.push(counts[num] * 100)
        }
        else if (num === "5") {
            scores.push(counts[num] * 50)
        }
    }
    console.log(scores)
    return scores.reduce((acc, num) => acc += num, 0)
}