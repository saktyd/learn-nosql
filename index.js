require('dotenv').config()
const MongoClient = require('mongodb').MongoClient
const assert = require('assert')

// Connection URL
const url = process.env.URL

// Database Name
const dbName = process.env.DB_NAME

const createNewUser = function(db) {
  const newUser = {
    name: 'Sakti Dewantoro',
    age: 23,
    email: 'saktyd@gmail.com'
  }

  db.collection('users').insert(newUser, (err, result) => {
    if (err) {
      console.log({
        message: 'Failed to create new user'
      })
    } else {
      console.log({
        message: 'Create new user',
        result: result
      })
    }
  })
}

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  console.log('Connected successfully to server')

  const db = client.db(dbName)

  // insertDocument
  createNewUser(db)

  client.close()
})
