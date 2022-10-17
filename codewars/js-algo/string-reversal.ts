console.log(reverseString('algorithms')) // should return 'smhtirogla'

function reverseString(str: string): string[] {
    const restChain = [...str].reverse().join("")
    const splitChain = str.split("").reverse().join("")
    const reduceChain = str.split("").reduce((acc, curr) => curr + acc, "")

    let reverseForLoop = ""
    for (let i = str.length - 1; i >= 0; i--) {
        reverseForLoop += str[i]
    }

    let reverseForOfLoop = ""
    for (const char of str) {
        reverseForOfLoop = char + reverseForOfLoop
    }

    return [restChain, splitChain, reduceChain, reverseForLoop, reverseForOfLoop]
}