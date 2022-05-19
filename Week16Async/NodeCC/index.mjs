// Old way.
// const Person = require('./person')
// ES6 way
import Person from './person.js'
// ^ Need to set file type to .mjs, or
// add {"type: 'module'"} to the nearest package.json.
// https://stackoverflow.com/a/45854500/13627106

const person = new Person('Saitama', 26)

person.greeting()