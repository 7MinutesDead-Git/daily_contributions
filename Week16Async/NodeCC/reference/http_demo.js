const http = require('http')

function serverUpCallback() {
    console.log('Server running..')
}

// Create server object
http.createServer(function (req, res) {
    res.write('Hey Earth.') // Write a response to the client
    res.end() // End the response
}).listen(8080, serverUpCallback) // The server object listens on port 8080

