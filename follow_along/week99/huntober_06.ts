// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

function withCounts(str: string): string {
    let result = ''
    const counts = [...str.toLowerCase()].reduce((count, char) => {
        count[char] ? count[char]++ : count[char] = 1
        return count
    }, {})

    for (const char of str.toLowerCase()) {
        if (counts[char] > 1) {
            result += ")"
        }
        else {
            result += "("
        }
    }
    return result
}


function withMapAndIndex(str: string): string {
    const parenthesis = [...str.toLowerCase()].map((char, index, array) => {
        if (array.indexOf(char) !== array.lastIndexOf(char)) {
            return ")"
        }
        return "("
    })
    return parenthesis.join("")
}

console.log(withCounts("din"))
console.log(withMapAndIndex("din"))

console.log(withCounts("recede"))
console.log(withMapAndIndex("recede"))

console.log(withCounts("Success"))
console.log(withMapAndIndex("Success"))

console.log(withCounts("(( @"))
console.log(withMapAndIndex("(( @"))