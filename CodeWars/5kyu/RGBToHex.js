// https://www.codewars.com/kata/513e08acc600c94f01000001/train/javascript

function convertToRGBHex(num) {
    return Math.min(Math.max(num, 0), 255).toString(16).toUpperCase().padStart(2, '0')
}

function rgb(r, g, b) {
    const red = convertToRGBHex(r)
    const green = convertToRGBHex(g)
    const blue = convertToRGBHex(b)
    return `${red}${green}${blue}`
}

console.log(rgb(300, 255, 255))