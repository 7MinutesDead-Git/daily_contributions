// npm run dev
// ------------------------------------------------------------
// Imports
const express = require('express')
const fs = require('fs')
const { MongoClient, ServerApiVersion } = require('mongodb')


// ------------------------------------------------------------
// Global Variables
const secureFolder= 'secure'
const PORT = process.env.PORT || 3000
// https://www.twilio.com/blog/working-with-environment-variables-in-node-js-html
const mongoDBCloudURL = process.env.MONGODB_CLOUD_URL

// ------------------------------------------------------------
// Return Promise of path to mongodb cloud credentials file.
async function getCredentialsPath() {
  return new Promise((resolve, reject) => {
    fs.readdir(secureFolder, (err, files) => {
        for (const file of files) {
          if (file.endsWith('.pem')) {
            resolve(`${secureFolder}/${file}`)
          }
        }
      })
  })
}

// ------------------------------------------------------------
function startExpressServer() {
  const app = express()
  // We don't need to use body-parser anymore as of Express 4.16.0+
  // Used to parse JSON bodies.
  app.use(express.json())
  // Used to parse URL-encoded bodies using qs (query string) library.
  app.use(express.urlencoded({ extended: true }))

  app.listen(PORT, () => {
    console.log(`🐡 Node up on port ${PORT} 🐡`)
  })
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
  app.post('/add', (req, res) => {
    console.log(`Submitted new drink: ${req.body.name}: "${req.body.instructions}"`)
    res.send('Drink submitted! Please wait a bit for the submission to be reviewed.')
  })
}

// ------------------------------------------------------------
async function setupMongoDBConnection() {
  const credentials = await getCredentialsPath()
  console.log(`🦆 Credentials path: ${credentials}`)

  const mongoVerification = {
    sslKey: credentials,
    sslCert: credentials,
    serverApi: ServerApiVersion.v1
  }

  return new Promise((resolve, reject) => {
    let client
    try {
      client = new MongoClient(mongoDBCloudURL, mongoVerification)
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
  await startExpressServer()
}


// ------------------------------------------------------------
main()