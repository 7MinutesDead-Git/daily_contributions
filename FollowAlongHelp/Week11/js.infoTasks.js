// https://javascript.info/object#hello-object

// Hello, object.
const user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name

// Check for emptiness.
function isEmpty(obj) {
    for (let key in obj) {
        // if the loop has started, there is a property.
        return false
    }
    return true
}

// Sum object properties.
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for (const name in salaries) {
    sum += salaries[name]
}
console.log(sum)

// Multiply numeric property values by 2.
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (const prop in obj) {
        if (!isNaN(obj[prop]))
            obj[prop] *= 2
    }
    return obj
}
console.log(multiplyNumeric(menu))