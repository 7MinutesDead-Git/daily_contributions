// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript
class VigenèreCipher {
    constructor(key, abc) {
        this.key = [...key]
        this.abc = [...abc]
        this.result = []
    }

    encode(str) {
        const input = [...str]
        for (const [index, letter] of input.entries()) {
            this.cipherize(index, letter, true)
        }
        return this.result.join('')
    }
    decode(str) {
        const input = [...str]
        for (const [index, letter] of input.entries()) {
            this.cipherize(index, letter, false)
        }
        return this.result.join('')
    }

    cipherize(index, letter, encrypt) {
        if (this.abc.includes(letter)) {
            // Essentially, our key loops across the entire input.
            const keyIndex = this.key.length % index
            if (isNaN(keyIndex)) {
                throw new Error(`Key index came out NaN for some reason.. Index ${index}, Letter ${letter}`)
            }
            const encodedIndex = this.abc.indexOf(this.key[keyIndex])
            let encodedLetter
            encrypt ?
                encodedLetter = this.abc[encodedIndex + this.abc.indexOf(letter)] :
                encodedLetter = this.abc[this.abc.indexOf(letter) - encodedIndex]
            this.result.push(encodedLetter)
        } else {
            this.result.push(letter)
        }
    }
}

const test = new VigenèreCipher('password', 'abcdefghijklmnopqrstuvwxyz')
console.log(test.encode('codewars'))
console.log(test.decode('rovwsoiv'))