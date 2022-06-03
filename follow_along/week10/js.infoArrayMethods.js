// https://javascript.info/array-methods
// Write the function camelize(str) that changes dash-separated words like
// “my-short-string” into camel-cased “myShortString”.
function camelize(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        let char = str[i]

        if (char === '-') {
            result += str[i+1].toUpperCase()
            i++
        } else {
            result += char
        }
    }
    return result
}
console.log(camelize("background-color") === 'backgroundColor')
console.log(camelize("list-style-image") === 'listStyleImage')
console.log(camelize("-webkit-transition") === 'WebkitTransition')


// Write a function filterRange(arr, a, b) that gets an array arr,
// looks for elements with values higher or equal to a and lower
// or equal to b and return a result as an array.
function filterRange(arr, a, b) {
    return arr.filter(num => { return a <= num && num <= b })
}
let arr = [5, 3, 8, 1]
let filtered = filterRange(arr, 1, 4)
console.log( filtered ) // 3,1 (matching values)
console.log( arr ) // 5,3,8,1 (not modified)


// Sort in decreasing order.
function sortDecreasing() {
    let arr = new Int8Array([5, 2, 1, -10, 8])
    return arr.sort((a, b) => b - a)
}
console.log(sortDecreasing())

// Map to names.
function mapToNames() {
    const john = { name: "John", age: 25 }
    const pete = { name: "Pete", age: 30 }
    const mary = { name: "Mary", age: 28 }
    const users = [ john, pete, mary ]
    const names = users.map(person => person.name)
    console.log(names)
}
mapToNames()

// Map to objects.
function mapToObjects() {
    const john = { name: "John", surname: "Smith", id: 1 }
    const pete = { name: "Pete", surname: "Hunt", id: 2 }
    const mary = { name: "Mary", surname: "Key", id: 3 }
    const users = [ john, pete, mary ]
    const usersMapped = users.map(person => ({
        fullName: `${person.name} ${person.surname}`,
        id: person.id
    }))
    console.log(usersMapped[0].id) // 1
    console.log(usersMapped[0].fullName) // John Smith
}
mapToObjects()

// Sort users by age.
function sortByAge() {
    let john = { name: "John", age: 25 }
    let pete = { name: "Pete", age: 30 }
    let mary = { name: "Mary", age: 28 }
    let arr = [ pete, john, mary ]
    arr.sort((a, b) => b.age - a.age)
    console.log(arr)
}
sortByAge()

// Randomize/Shuffle an array.
function numShuffle(spins) {
    let arr = [1, 2, 3, 4]
    for (let spin = 0; spin < spins; spin++) {
        for (let i = 0; i < arr.length; i++) {
            const randomIndex = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]]
        }
        console.log(arr)
    }
}
numShuffle(10)

// Get average age.
function getAverageAge() {
    let john = { name: "John", age: 25 }
    let pete = { name: "Pete", age: 30 }
    let mary = { name: "Mary", age: 29 }
    let arr = [ john, pete, mary ]

    const sum = arr.reduce((sum, item) => {
        return sum + item.age
    }, 0)
    console.log(sum / arr.length)
}
getAverageAge()