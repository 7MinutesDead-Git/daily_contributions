// https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript
function isSquare(n) {
    if (n < 0)
        return false
    const root = Math.sqrt(n)

    if (Number.isInteger(root))
        return n === root ** 2
    return false
}

// Much more simply:
function simpleSquare(n) {
    return Math.sqrt(n) % 1 === 0
}