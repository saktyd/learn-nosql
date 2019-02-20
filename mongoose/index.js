require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(`${process.env.URL}/${process.env.DB_NAME}`, {
  useNewUrlParser: true
})

const User = mongoose.model('User', {
  name: String,
  age: Number,
  email: String
})

const sakti = new User({
  name: 'Sakti',
  age: 23,
  email: 'saktyd@gmail.com'
})

sakti.save().then(() => console.log('Created new user'))
