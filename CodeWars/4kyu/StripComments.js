// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript
function solution(input, markers) {
    let commenting = false
    const result = []

    for (let i = 0; i < input.length; i++) {
        if (markers.includes(input[i]))
            commenting = true

        if (input[i] === '\n') {
            commenting = false
            // Solution says to trim whitespace at the end of each line.
            if (result[result.length-1] === ' ')
                result.pop()
        }

        if (!commenting)
            result.push(input[i])
    }
    return result.join("").trim()
}


console.log(solution("apples, plums % and bananas\npears\noranges !applesauce", ["%", "!"]))