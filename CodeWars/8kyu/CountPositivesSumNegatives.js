// https://www.codewars.com/kata/576bb71bbbcf0951d5000044/train/javascript
function countPositivesSumNegatives(input) {
    if (!input || input.length === 0)
        return []

    return input.reduce((totals, num) => {
        num > 0 ? totals[0]++ : totals[1] += num
        return totals
    }, [0, 0])
}