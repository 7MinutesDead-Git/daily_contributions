const http = require('http')
const fs = require('fs')
const path = require('path')
const url = require('url')
const figlet = require('figlet')

// --------------------------------------------------
const PORT = process.env.PORT || 8000
// A tiny test database object.
const tinyDB = {
  "leon": {
    name: "leon",
    status: "Boss Man",
    currentOccupation: "Baller"
  },
  "me": {
    name: "you",
    status: "Way past cool",
    currentOccupation: "Software Engineer"
  },
  "unknown": {
    name: "unknown",
    status: "unknown",
    currentOccupation: "unknown"
  }
}

// --------------------------------------------------
// Returns the matching content type for a given file extension, or text/html by default.
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

// --------------------------------------------------
const server = http.createServer((req, res) => {
  const requestPageName = req.url === "/" ? "index.html" : req.url
  const isApiRequest = requestPageName.startsWith('/api')

  let filePath = path.join(__dirname, requestPageName)
  let fileType = path.extname(filePath)

  if (fileType.length === 0 && !isApiRequest) {
    filePath = path.join(__dirname, requestPageName + '.html')
    fileType = path.extname(filePath)
  }
  const contentType = getContentType(fileType)
  const params = url.parse(req.url, true).query

  // --------------------------------------------------
  // Helper methods:
  // --------------------------------------------------
  function servePageResponse() {
    fs.readFile(filePath, (err, data) => {
      res.writeHead(200, contentType)
      try {
        res.write(data)
      } catch (err) {
        console.log(`Error when trying to load ${requestPageName}`)
        console.log(err)
      }
      res.end()
    })
  }
  // --------------------------------------------------
  function getAPIContent() {
    // Note: If student doesn't exist, unknown student is returned instead.
    return tinyDB[params['student']] || tinyDB['unknown']
  }
  // --------------------------------------------------
  function serveAPIResponse() {
    res.writeHead(200, contentType)
    const objToJson = getAPIContent()
    res.end(JSON.stringify(objToJson))
  }
  // --------------------------------------------------
  function serveErrorResponse(err) {
    console.log(err)
    figlet('404 Page Not Found', function(figError, data) {
      if (figError) {
        console.log('Something went wrong...')
        console.dir(figError)
        return
      }
      res.write(data)
      res.end()
    })
  }

  // --------------------------------------------------
  // Response served here!
  try {
    isApiRequest ? serveAPIResponse() : servePageResponse()
  }
  catch (err) {
    serveErrorResponse(err)
  }
})

server.listen(PORT)
console.log(figlet.textSync('Server Up', {
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}))
console.log(`Head over to http://localhost:${PORT}/`)