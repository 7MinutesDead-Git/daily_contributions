// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digitalRoot(n) {
    n = n.toString()

    if (n.length === 1)
        return Number(n)

    const reduction = Array.from(n).reduce((total, num) => {
        return Number(total) + Number(num)
    }, 0)

    return digitalRoot(reduction)
}