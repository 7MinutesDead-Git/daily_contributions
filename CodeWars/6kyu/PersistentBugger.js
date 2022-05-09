// https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
function persistence(num) {
    let steps = 0
    let currentNum = [...num.toString()]

    while (currentNum.length > 1) {
        steps++
        let result = currentNum.reduce((total, num) => {
            total *= num
            return total
        }, 1)
        currentNum = [...result.toString()]
    }
    return steps
}