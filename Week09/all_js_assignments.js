// ------------------------------------------------------------------
// https://eloquentjavascript.net/03_functions.html

// ------------------------
// Minimum.
function minimum(a, b) {
    if (a < b)
        return a
    return b
}
console.log(minimum(0, 10))
console.log(minimum(0, -10))

// ------------------------
// Recursion.
function isEven(num) {
    if (num < 0)
        num *= -1

    if (num === 0)
        return true

    if (num === 1)
        return false

    return (isEven(num-2))
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1))
console.log(isEven(-2))

// ------------------------
// Bean Counting.
function  countBs(string) {
    let count = 0
    for (const char of string) {
        if (char === 'B')
            count += 1
    }
    return count
}

function countChar(string, countMe) {
    let count = 0
    for (const char of string) {
        if (char === countMe)
            count += 1
    }
    return count
}
console.log(countBs('bbbbBBbBbb'))
console.log(countChar("kakkerlak", "k"))

// ------------------------------------------------------------------
// https://eloquentjavascript.net/02_program_structure.html

// ------------------------
// Looping a triangle.
function logTriangle(character, height) {
    for (let i = 0; i < height; i++) {
        console.log(character.repeat(i))
    }
}
logTriangle('▀', 10)

// ------------------------
// FizzBuzz
function fizzBuzz(max) {
    for (let i = 1; i <= max; i++) {
        if (i % 15 === 0)
            console.log('FizzBuzz')
        else if (i % 3 === 0)
            console.log('Fizz')
        else if (i % 5 === 0)
            console.log('Buzz')
        else
            console.log(i)
    }
}
fizzBuzz(100)

// ------------------------
// ChessBoard.
function createChessBoard(size) {
    for (let row=0; row < size; row++)
        if (row % 2 === 0)
            console.log(` #`.repeat(size))
        else
            console.log(`# `.repeat(size))
}
createChessBoard(10)
createChessBoard(20)

// ------------------------------------------------------------------
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter03.md#coding-time

// ------------------------
// Following Day. (need to run in a browser to make use of prompt and alert)
function nextDay() {
    const input = prompt('Input day.').toLowerCase().trim()
    const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']

    if (!days.includes(input)) {
        console.log('Please enter a valid day.')
        nextDay()
    }

    const nextDayIndex = (days.indexOf(input) + 1) % days.length
    return days[nextDayIndex]
}
alert(nextDay())

// ------------------------
// Number comparison.
function oneSecondLater(hour, minute, second) {
    second += 1

    // This will also manage *any* overflow regardless of input.
    const minutesOverflow = second / 60
    if (minutesOverflow >= 1) {
        minute += minutesOverflow
        second = second % 60
    }
    const hoursOverflow = minute / 60
    if (hoursOverflow >= 1) {
        hour += hoursOverflow
        minute = minute % 60
    }
    if (hour >= 24) {
        hour = hour % 24
    }
    hour = Math.floor(hour)
    minute = Math.floor(minute)
    second = Math.floor(second)
    return `${hour}h${minute}m${second}s`
}
console.log(oneSecondLater(26, 59, 59))
console.log(oneSecondLater(10, 400, 350))

// ------------------------------------------------------------------
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter04.md#coding-time

// ------------------------
//Multiplication table.
// Prints an aligned multiplication table given an x and y limit.
function generateMultiplicationTable(xLimit, yLimit) {
    // We can keep the table output aligned by tracking the character lengths and comparing
    // with each multiplication result length.
    // We know that the largest possible cell size will be our given x and y upper limits.
    const cellWidth = (xLimit * yLimit).toString().length
    const grid = []
    const space = ' '

    for (let y = 1; y <= yLimit; y++) {
        // Reset x value and line for each new y line.
        let x = 1
        let line = ''
        // Generate the full line/row.
        for (x; x <= xLimit; x++) {
            const result = x * y
            const spaceFiller = cellWidth - result.toString().length
            line += `${space.repeat(spaceFiller)}${result} `
        }
        // Push that row to the grid.
        grid.push(line)
    }

    for (const row of grid)
        console.log(row)
}
generateMultiplicationTable(30, 15)
generateMultiplicationTable(10, 12)
