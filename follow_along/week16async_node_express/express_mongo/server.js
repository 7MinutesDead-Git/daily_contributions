// https://zellwk.com/blog/crud-express-mongodb/

const express = require('express')
const fs = require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb')

// --------------------------------------------------------------------
// Global Variables
const PORT = process.env.PORT || 3000

// --------------------------------------------------------------------
// Static functions
function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
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

    this.MongoClient = null
    this.db = null
    this.recipeCollection = null
    this.docCount = null
    this.recipeDB = 'recipe-db'
  }

  // ------------------------------------------------------------
  // Startup the Express server on the designated port.
  startServer() {
    this.#setupMiddleware()
    this.#setupPostRoutes()
    this.#setupGetRoutes()
    this.#setupPutRoutes()
    this.#setupBadRoute()

    this.app.listen(PORT, () => {
      console.log(`🐡 Node up on port ${PORT} 🐡`)
    })
  }

  // ------------------------------------------------------------
  // Setup helper methods
  #setupMiddleware() {
    // Since we can't send multiple files with sendFile, and we want to serve
    // things like index.html and its stylesheet, we can use static instead.
    // This will serve everything placed in the "public" directory.
    this.app.use(express.static('public'))
    // We don't need to use body-parser anymore as of Express 4.16.0+
    // Used to parse JSON bodies.
    this.app.use(express.json())
    // Used to parse URL-encoded bodies using qs (query string) library.
    this.app.use(express.urlencoded({ extended: true }))

    // Set embedded javascript as the template engine.
    this.app.set('view engine', 'ejs')

    // Custom middleware:
    // this.app.use(this.requestLogger)
  }

  #setupGetRoutes() {
    this.app.get('/', async (req, res) => {
      const recipes = await this.recipeCollection.find().toArray()
      res.render('index', { recipes })

    })
  }

  #setupPostRoutes() {
    // Route for submitting a new recipe.
    this.app.post('/add', async (req, res) => {
      const record = req.body
      try {
        const result = await this.recipeCollection.insertOne(record)
        console.log(`🦆 Inserted 1 document into collection: ${result.insertedId}`)
        console.log(record)
        res.redirect('/')
      }
      catch (err) {
        console.error(`🐡 Error adding recipe: ${err}`)
        res.send('🐡 Error adding recipe! 🐡')
      }
    })
  }

  #setupPutRoutes() {
    this.app.put('/recipes', async (req, res) => {
      console.log(req.body)
    })
  }

  #setupBadRoute() {
    this.app.all('*', (req, res) => {
      console.log(`🙈🔥 Bad request from ${req.ip} ==> ${req.url}`)
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
    this.MongoClient = await this.#setupMongoDBConnection()

    try {
      await this.MongoClient.connect()
      console.log('🦆 Connected to MongoDB Cloud!')
      this.db = this.MongoClient.db(this.recipeDB)
      this.recipeCollection = this.db.collection(this.recipeDB)

      this.docCount = await this.recipeCollection.countDocuments({})
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

  // Function to use as middleware to log request sources.
  requestLogger(req, res, next) {
    console.log(`🐡 Request from ${req.ip} ==> ${req.url} 🐡`)
    // Moves onto the next middleware function.
    next()
  }
}


// --------------------------------------------------------------------
// Start the server.
const server = new ExpressServer()
server.startServer()
server.createMongoConnection()