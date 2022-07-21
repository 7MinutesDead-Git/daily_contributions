// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript
function getSums(array) {
    // Since the tests expect an error to be thrown when a string doesn't represent
    // a number, we can just throw the error from inside our reduce function here.
    // This ensures we only need to loop over our entire string/array once,
    // so we stick to O(n).
    return array.reduce((sum, num) => {
        if (isNaN(num) || num === " ")
            throw new Error(`${num} in ${array} is not a number.`)
        return sum += Number(num)
    }, 0)
}

function luckCheck(ticket) {
    ticket = ticket.split("")
    const mid = ticket.length / 2
    const lengthIsEven = ticket.length % 2 === 0

    let left = ticket.slice(0, mid)
    // Null here is redundant, but if any bugs started from here,
    // we would know null was intentional.
    // Otherwise it would return undefined if we simply declare it as "let right"
    let right = null

    lengthIsEven ?
        right = ticket.slice(mid) :
        right = ticket.slice(mid+1)

    left = getSums(left)
    right = getSums(right)

    return left === right
}