// https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript
function accum(s) {
    let result = ""
    let i = 1

    for (const letter of s) {
        let string = [...letter.toLowerCase().repeat(i)]
        string[0] = string[0].toUpperCase()
        result += string.join("") + "-"
        i++
    }
    // Removes trailing dash from above algorithm.
    // I'd rather do this than add an if statement in the for loop above.
    return result.slice(0, -1)
}