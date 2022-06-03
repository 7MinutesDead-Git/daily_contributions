const http = require('http')
const fs = require('fs')

// "node demo.js"
// Create server to listen on port 8000.
const PORT = 8000
http.createServer((req, res) => {
  // Read the file and write it to the response object for the client to receive.
  fs.readFile('demofile.html', (err, data) => {
    res.writeHead(200, {'Content-Type': 'text/html'})
    res.write(data)
    res.end()
  })
// localhost:8000
}).listen(PORT)
