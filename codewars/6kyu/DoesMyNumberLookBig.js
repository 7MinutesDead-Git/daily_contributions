// https://www.codewars.com/kata/5287e858c6b5a9678200083c/train/javascript
function narcissistic(value) {
    const array = [...value.toString()]
    const power = array.length

    let rollingSum = array.reduce((sum, num) => {
        sum += (num ** power)
        return sum
    }, 0)

    return rollingSum === value
}
