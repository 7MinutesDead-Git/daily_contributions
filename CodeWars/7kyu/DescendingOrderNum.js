// https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
    // I wanted to make something unreadable too!
    return Number([...n.toString()].sort((a, b) => b - a).reduce((str, num) => str += num, ""))
}