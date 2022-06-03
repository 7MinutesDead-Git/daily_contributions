// https://www.codewars.com/kata/52f787eb172a8b4ae1000a34/train/javascript
function zeros (n) {
    console.log(n)
    let count = 0

    while (n >= 5) {
        n = Math.floor(n / 5)
        count += n
    }
    return count
}