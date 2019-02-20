require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = process.env.URL

// Database Name
const dbName = process.env.DB_NAME

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log('Connected successfully to server')

  const db = client.db(dbName)

  client.close()
})
