// https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
function digital_root(n) {

    if (n.toString().length > 1) {
        n = [...n.toString()]
        let sum = 0
        for (const num of n)
            sum += Number(num)
        return digital_root(sum)
    }
    return n
}