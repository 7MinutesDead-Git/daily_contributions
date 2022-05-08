// https://www.codewars.com/kata/526571aae218b8ee490006f4/train/javascript
const countBits = function(n) {
    // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/object/tostring#parameters
    // toString() implemented by Number or BigInt inherit and accept optional radix parameter.
    const bits = n.toString(2)
    let count = 0

    for (const bit of bits) {
        if (bit === "1")
            count++
    }
    return count
}

console.log(countBits(52093109))
