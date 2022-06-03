// https://www.codewars.com/kata/54e6533c92449cc251001667/train/javascript
var uniqueInOrder=function(iterable) {
    iterable = [...iterable]
    for (let i = 0; i < iterable.length; i++) {
        if (iterable[i] === iterable[i+1]) {
            iterable.splice(i, 1)
            i--
        }
    }
    return iterable
}

console.log(uniqueInOrder([1, 1, 2, 3, 4, 4, 5, 6, 6]))