const path = require('path')
// import * as path from "path"

// Full path.
console.log(__filename)

// Gets base file name.
console.log(path.basename(__filename))

// File extension.
console.log(path.extname(__filename))

// Create path object with properties!
console.log(path.parse(__filename))
console.log(path.parse(__filename).base)

// Concatenate paths.
// Good for varying delimiters, eg between Windows/Linux/etc.
// Usually resolves itself, but this is safe either way.
console.log(path.join(__dirname, 'test', 'hello.html'))
