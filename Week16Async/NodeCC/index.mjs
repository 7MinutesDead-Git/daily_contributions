// // Old way.
// // const Person = require('./person')
// // ES6 way
// import Person from './person.js'
// // ^ Need to set file type to .mjs, or
// // add {"type: 'module'"} to the nearest package.json.
// // https://stackoverflow.com/a/45854500/13627106
// const person = new Person('Saitama', 26)
// person.greeting()
//------------------------------------------------------------------------------
import http from 'http'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

//------------------------------------------------------------------------------
const PORT = process.env.PORT || 8000
// Required __dirname and __filename setup if using ES6 modules (ie this file is .mjs)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const indexFilePath = path.join(__dirname, 'public', 'index.html')
const notFoundFilePath = path.join(__dirname, 'public', '404.html')


//------------------------------------------------------------------------------
function getContentType(fileType) {
    const defaultHTMLType = 'text/html'
    const contentTypes = {
        '.css': 'text/css',
        '.js': 'text/javascript',
        '.json': 'application/json',
        '.png': 'image/png',
        '.jpg': 'image/jpeg',
        '.gif': 'image/gif',
    }
    return contentTypes[fileType] || defaultHTMLType
}


//------------------------------------------------------------------------------
const server = http.createServer((req, res) => {
    // The URL the client is requesting.
    console.log(req.url)

    //------------------------------------------------------
    // Page serve example. Inefficient because of if/else chains for each new pages.
    // Also does not handle CSS or images or anything else.
    if (req.url === '/') {
        // Write to the headers.
        res.writeHead(200, { 'Content-Type': 'text/html' })

        fs.readFile(indexFilePath, (err, content) => {
            if (err) throw err
            // The content of indexFilePath is a buffer served here.
            res.end(content)
        })
    }
    //------------------------------------------------------
    // Example of api response (normally would use a database for retrieving data here before serving.)
    // Would probably use Express for this, but this is a rough Node-only example.
    if (req.url === '/api/users') {
        const users = [
            { name: 'Saitama', age: 26 },
            { name: 'Iji', age: 4000 }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(users))
    }

    //------------------------------------------------------
    // Make the file path dynamic. Now we can serve any type of file*
    // *( at least the ones I designated in getContentType() haha. )

    // Build file path.
    const requestPageName = req.url === "/" ? "index.html" : req.url
    const filePath = path.join(__dirname, 'public', requestPageName)
    // Get extension
    const fileType = path.extname(filePath)
    // Set content type based on extension.
    const contentType = getContentType(fileType)

    // Read file.
    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                // Page not found.
                res.writeHead(404, { 'Content-Type': 'text/html' })
                fs.readFile(notFoundFilePath, (err, content) => {
                    res.end(content)
                })
            } else {
                // Some other error.
                res.writeHead(500, { 'Content-Type': 'text/html' })
                res.end(`Server error: ${err.code}`)
            }
        } else {
            // Success.
            res.writeHead(200, { 'Content-Type': contentType })
            res.end(content)
        }
    })
})

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`))