// npm run dev
// ------------------------------------------------------------
// Imports
const express = require('express')
const fs = require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb')


// ------------------------------------------------------------
// Global Variables
const PORT = process.env.PORT || 3000

// ------------------------------------------------------------
function startServer() {
  const app = express()
  setupMiddleware(app)
  // -------------------------------
  app.listen(PORT, () => {
    console.log(`🐡 Node up on port ${PORT} 🐡`)
  })
  setupGetRoutes(app)
  setupPostRoutes(app)
  setupBadRoute(app)
}

function setupMiddleware(app) {
  // We don't need to use body-parser anymore as of Express 4.16.0+
  // Used to parse JSON bodies.
  app.use(express.json())
  // Used to parse URL-encoded bodies using qs (query string) library.
  app.use(express.urlencoded({ extended: true }))
  // Since we can't send multiple files with sendFile, and we want to serve
  // things like index.html and its stylesheet, we can use static instead.
  // This will serve everything placed in the "public" directory.
  app.use(express.static('public'))
}

function setupGetRoutes(app) {
  // // Keeping for future reference, but this is now handled by the
  // // static middleware above.
  // app.get('/', (req, res) => {
  //   res.sendFile(__dirname + '/index.html')
  // })
}
function setupPostRoutes(app) {
  app.post('/add', (req, res) => {
    console.log(`Submitted new drink: ${req.body.name}: "${req.body.instructions}"`)
    res.send('Drink submitted! Please wait a bit for the submission to be reviewed.')
  })
}

function setupBadRoute(app) {
  app.all('*', (req, res) => {
    console.log(`🐡 Bad request from ${req.ip} ==> ${req.url} 🐡`)
    res.send('🐡 404 🐡')
  })
}

// ------------------------------------------------------------
async function setupMongoDBConnection() {
  const credentialsURI = process.env.mongo_db_hw_uri
  const mongoClientSetup = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1
  }

  return new Promise((resolve, reject) => {
    let client
    try {
      client = new MongoClient(credentialsURI, mongoClientSetup)
    }
    catch (err) {
      console.log(`🙈🔥 Problem creating mongoDB client. Check URL, or credentials: ${err}`)
      reject(err)
    }
    resolve(client)
  })
}

// ------------------------------------------------------------
async function connectToMongo() {
  const client = await setupMongoDBConnection()

  try {
    await client.connect()
    console.log('🦆 Connected to MongoDB Cloud!')

    const database = client.db("recipe-db")
    const collection = database.collection("recipe-collection")
    const docCount = await collection.countDocuments({})
    console.log(`🦆 Document count: ${docCount}`)

  } finally {
    console.log('🦍 Closing connection to MongoDB Cloud')
    await client.close()
  }
}

// ------------------------------------------------------------
async function main() {
  await connectToMongo()
  await startServer()
}


// ------------------------------------------------------------
main()