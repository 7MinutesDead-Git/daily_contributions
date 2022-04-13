// https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript
function spinWords(string){
    let array = string.split(' ')

    for (const [index, word] of array.entries()) {
        if (word.length >= 5) {
            array[index] = [...word].reverse().join("")
        }
    }
    return array.join(" ")
}