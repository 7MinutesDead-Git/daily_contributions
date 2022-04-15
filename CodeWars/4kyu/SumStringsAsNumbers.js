// https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript
// Below is a whole bunch of mess, when you could just use javascript's built in BigInt() method.
function waySimpler(a,b) {
    return (BigInt(a) + BigInt(b)).toString()
}

// --------------------------------------------------------------------
// To cover edge test cases where the input numbers have leading zeros.
function trimZeroes(str) {
  return str.replace(/^0+/g, '')
}

// Long-winded solution.
function sumStrings(a,b) {
    let first
    let second

    a = trimZeroes(a)
    b = trimZeroes(b)

    if (a.length > b.length) {
        first = a
        second = b
    } else {
        first = b
        second = a
    }

    let sum = ""
    let carry = 0
    let lengthDiff = second.length - first.length

    // Reverse loop!
    for (let i = first.length - 1; i >= 0; i--) {
        // We need to add the two right-most digits each pass.
        // Modulo 10 to get the remainder / carry.
        const firstCarry = Number(first.charAt(i) % 10)
        const secondCarry = Number(second.charAt(i+lengthDiff) % 10)
        let totalCarry = firstCarry + secondCarry + carry

        // Continuously add the right most digits.
        // If the total is greater than 10, we need to carry.
        if (totalCarry >= 10) {
            // Since we're building the string backwards, we need to add the carry to the front.
            sum = (totalCarry % 10) + sum
            carry = Math.floor(totalCarry / 10)
        } else {
            sum = totalCarry + sum
            carry = 0
        }
    }
    // For the remaining digits, we'll need to add any remaining carry.
    if (carry !== 0)
        sum = carry + sum

    return sum
}

console.log(sumStrings('00103','08567')) // '8842'