// https://www.codewars.com/kata/5314b3c6bb244a48ab00076c/train/javascript
function getSums(array) {
    return array.reduce((sum, num) => {
        if (isNaN(num) || num === " ")
            throw new Error(`${num} in ${array} is not a nubmer.`)
        return sum += Number(num)
    }, 0)
}

function luckCheck(ticket) {
    ticket = ticket.split("")
    let mid = ticket.length / 2
    const lengthIsEven = ticket.length % 2 === 0

    let left = ticket.slice(0, mid)
    let right = null

    lengthIsEven ?
        right = ticket.slice(mid)
        : right = ticket.slice(mid+1)

    left = getSums(left)
    right = getSums(right)

    return left === right
}