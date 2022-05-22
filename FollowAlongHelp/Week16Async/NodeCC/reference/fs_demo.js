const fs = require('fs')
const path = require('path')
const { promisify } = require('util')

// --------------------------------------------------
// Create folder.
// Async by default so we can do a callback or promise.
// To use with promise, you can use promisify() method from utilities module.
const folderName = '/test'

fs.mkdir(path.join(__dirname, folderName), { recursive: true }, err => {
  if (err) throw err
  console.log('Folder created!')
})

// --------------------------------------------------
// Create and write to file.
// Async by default.
const fileName = 'hello.txt'
const savePath = path.join(__dirname, folderName, fileName)
const textData = 'Hey You!'

fs.writeFile(savePath, textData, err => {
  if (err) throw err
  console.log(`Created ${savePath}`)
})

// --------------------------------------------------
// Append file.
// Async by default.
fs.appendFile(savePath, "Some new text", err => {
  if (err) throw err
  console.log(`Modified ${savePath}`)
})

// --------------------------------------------------
// Read file.
fs.readFile(savePath, 'utf8', (err, data) => {
  if (err) throw err
  console.log(`Read ${savePath}`)
  console.log(data)
})

// --------------------------------------------------
// Rename file.
fs.rename(savePath, path.join(__dirname, folderName, 'hello-renamed.txt'), err => {
  if (err) throw err
  console.log(`Renamed ${savePath}`)
})