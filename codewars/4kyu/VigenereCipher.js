// https://www.codewars.com/kata/52d1bd3694d26f8d6e0000d3/train/javascript
class VigenèreCipher {
    constructor(key, abc) {
        this.key = [...key]
        this.abc = [...abc]
        this.result = []
    }
    // TODO
    getCipherIndex() {

    }
    // TODO
    encode(str) {
        const input = [...str]
        let encodeIndex = 0
        for (const [index, letter] of input.entries()) {
            encodeIndex = this.getCipherIndex(index)
        }
    }
    // TODO
    decode(str) {

    }
}