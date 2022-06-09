// https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript
function solution(number) {
    let i = 0
    let sum = 0

    while (i < number) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
        i++
    }
    return sum
}