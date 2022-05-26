const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Node up on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})