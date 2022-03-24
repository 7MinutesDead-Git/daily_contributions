// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter06.md

// -------------------------------------------
// Adding character experience.
const aurora = {
    health: 100,
    strength: 10,
    xp: 0,
    describe() {
        return `Aurora status: ${this.health} HP, ${this.strength} STR, ${this.xp} XP`
    }
}
// Aurora is harmed by an arrow
aurora.health -= 20
// Aurora equips a strength necklace
aurora.strength += 10
// Aurora learn a new skill
aurora.xp += 15
console.log(aurora.describe())

// -------------------------------------------
// Modeling a dog.
const dog = {
    name: 'smelly',
    species: 'corgi',
    size: 'medium chonk',
    bark() {
        return "OH GOD IT'S A CAT"
    }
}
console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}.`)
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}.`)

// -------------------------------------------
// // Modeling a circle.
// const r = Number(prompt("Enter the circle radius:"))
//
// const circle = {
//     circumference() {
//         return 2 * Math.PI * r
//     },
//     area() {
//         return Math.PI * r ** 2
//     }
// }
// console.log(`Its circumference is ${circle.circumference()}`)
// console.log(`Its area is ${circle.area()}`)

// -------------------------------------------
// Modeling a bank account.
const account = {
    name: 'Alex',
    balance: 0,
    credit(value) {
        this.balance += value
    },
    describe() {
        return `${this.name}: $${this.balance}`
    }
}
account.credit(250)
account.credit(-80)
console.log(account.describe())


// -------------------------------------------
// https://github.com/thejsway/thejsway/blob/master/manuscript/chapter07.md

// Musketeers.
const musketeers = ['Athos', 'Porthos', 'Aramis']
for (const musk of musketeers)
    console.log(musk)

musketeers.push("D'Artagnan")
musketeers.forEach(musk => console.log(musk))

for (const musk of musketeers.filter(target => target !== 'Aramis')) {
    console.log(musk)
}

// Sum of values.
const sumOfValuesArray = [3, 11, 7, 2, 9, 10]
console.log(sumOfValuesArray.reduce((total, num) => total + num, 0))

// Array maximum.
const maximumOfValues = [3, 11, 7, 2, 9, 10]
console.log(maximumOfValues.reduce((answer, num) => {
    if (num > answer)
        return num
    return answer
}, 0))