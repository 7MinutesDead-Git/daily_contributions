// Variables Tasks ---------------------------------------
// Task 1
const name = 'John'
const admin = name
console.log(admin)

// Task 2
const thirdPlanet = 'Earth'
const currentUser = 'alien'

// Task 3
// Make birthday uppercase since a birthday doesn't change, but age lowercase since age can change as time goes on.


// Functions Tasks ---------------------------------------
// Task 1
// Else block isn't required since the first if block has a return statement.

// Task 2
function checkAgeQuestionMark(age) {
    return (age > 18) ? true : confirm('Did parents allow you?')
}
function checkAgeOrOperator(age) {
    return (age > 18) || confirm('Did parents allow you?')
}

// Task 3
function min(a, b) {
    if (a < b) {
        return a
    }
    return b
}
// Task 4
function pow(x, n) {
    let result = 1

    for (let i = 0; i < n; i++) {
        result *= x
    }
    return result
}
