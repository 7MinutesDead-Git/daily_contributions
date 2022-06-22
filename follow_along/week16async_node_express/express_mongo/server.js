// npm run dev
// ------------------------------------------------------------
// Imports
const express = require('express')
const fs = require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb')

// --------------------------------------------------------------------
// Global Variables
const PORT = process.env.PORT || 3000

// --------------------------------------------------------------------
// Static functions
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}

// --------------------------------------------------------------------
// A class to run and manage an Express server and its MongoDB connection.
class ExpressServer {
  // ------------------------------------------------------------
  // Private properties
  #credentialsURI
  #mongoClientSetup

  // ------------------------------------------------------------
  // Initial setup
  constructor() {
    this.app = express()
    this.#credentialsURI = process.env.mongo_db_hw_uri
    this.#mongoClientSetup = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1
    }
    this.db = null
    this.collection = null
    this.docCount = null
  }

  // ------------------------------------------------------------
  // Startup the Express server on the designated port.
  startServer() {
    this.#setupMiddleware()
    this.#setupPostRoutes()
    this.#setupGetRoutes()
    this.#setupBadRoute()

    this.app.listen(PORT, () => {
      console.log(`🐡 Node up on port ${PORT} 🐡`)
    })
  }

  // ------------------------------------------------------------
  // Setup helper methods
  #setupMiddleware() {
    // We don't need to use body-parser anymore as of Express 4.16.0+
    // Used to parse JSON bodies.
    this.app.use(express.json())
    // Used to parse URL-encoded bodies using qs (query string) library.
    this.app.use(express.urlencoded({ extended: true }))
    // Since we can't send multiple files with sendFile, and we want to serve
    // things like index.html and its stylesheet, we can use static instead.
    // This will serve everything placed in the "public" directory.
    this.app.use(express.static('public'))
  }
  #setupGetRoutes() {
    // // Keeping for future reference, but this is now handled by the
    // // static middleware above.
    // app.get('/', (req, res) => {
    //   res.sendFile(__dirname + '/index.html')
    // })
  }
  #setupPostRoutes() {
    this.app.post('/add', (req, res) => {
      const record = req.body
      console.log(`Submitted new drink: ${record.name}: "${record.instructions}"`)
      console.log(record)
      res.send('Drink submitted! Please wait a bit for the submission to be reviewed.')
    })
  }
  #setupBadRoute() {
    this.app.all('*', (req, res) => {
      console.log(`🐡 Bad request from ${req.ip} ==> ${req.url} 🐡`)
      res.send('🐡 404 🐡')
    })
  }

  // ------------------------------------------------------------
  // Returns a promise that resolves to a MongoDB client.
  async #setupMongoDBConnection() {
    return new Promise((resolve, reject) => {
      let client
      try {
        client = new MongoClient(this.#credentialsURI, this.#mongoClientSetup)
      }
      catch (err) {
        console.log(`🙈🔥 Problem creating mongoDB client. Check URL, or credentials: ${err}`)
        reject(err)
      }
      resolve(client)
    })
  }
  // ------------------------------------------------------------
  // Establish connection to mongoDB and get our database, collections and
  // document count.
  async createMongoConnection() {
    const client = await this.#setupMongoDBConnection()

    try {
      await client.connect()
      console.log('🦆 Connected to MongoDB Cloud!')
      this.db = client.db("recipe-db")
      this.collection = this.db.collection("recipe-collection")
      this.docCount = await this.collection.countDocuments({})
      console.log(`🦆 Document count: ${this.docCount}`)
    }
    catch (err) {
      console.log(`🙈🔥 Problem connecting to mongoDB: ${err}`)
    }
    finally {
      // console.log('🦍 Closing connection to MongoDB Cloud')
      // client.close()
    }
  }
}


// --------------------------------------------------------------------
// Start the server.
const server = new ExpressServer()
server.startServer()
server.createMongoConnection()