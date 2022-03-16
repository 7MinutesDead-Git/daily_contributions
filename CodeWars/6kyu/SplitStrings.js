// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001/train/javascript
// -------------------------------------------------------------------------
function solution(str){
    const result = []

    for (let i = 0; i < str.length; i += 2) {
        const firstLetter = str[i]
        // Ternary operator test will prevent any index out of bounds error.
        const secondLetter = str[i+1] ? str[i+1] : '_'
        result.push(`${firstLetter}${secondLetter}`)
    }
    return result
}


// -------------------------------------------------------------------------
// Unit tests.
const testCases = [
    solution('abcdef'),
    solution('abc'),
    solution(''),
    solution('abcd'),
    solution('abcdefgh'),
    solution('abcdefghi'),
    solution('abcdefghij'),
    solution('abcdefghijkl')
]

const expectedResults = [
    ['ab', 'cd', 'ef'],
    ['ab', 'c_'],
    [],
    ['ab', 'cd'],
    ['ab', 'cd', 'ef', 'gh'],
    ['ab', 'cd', 'ef', 'gh', 'i_'],
    ['ab', 'cd', 'ef', 'gh', 'ij'],
    ['ab', 'cd', 'ef', 'gh', 'ij', 'kl']
]

for (let i = 0; i < testCases.length; i++) {
    console.log(testCases[i].toString() === expectedResults[i].toString())
}