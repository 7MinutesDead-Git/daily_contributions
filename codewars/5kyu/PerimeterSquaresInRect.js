// https://www.codewars.com/kata/559a28007caad2ac4e000083/train/javascript
function generateFibonacci(n) {
    let num = 1
    const sequence = [1]

    if (n > 0) {
        // Setting i <= n rather than i < n will allow that n+1 iteration needed per instructions.
        for (let i = 1; i <= n; i++) {
            sequence.push(num)
            num = num + sequence[i-1]
        }
    }
    return sequence
}

function perimeter(n) {
    const fibSequence = generateFibonacci(n)
    const fibSum = fibSequence.reduce((prevNum, currentNum) => prevNum + currentNum)
    return 4 * fibSum
}

console.log(perimeter(7))