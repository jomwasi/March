console.log('May Node be with you')

const express = require('express');
const app = express();

app.listen(3000, function() {
    console.log('listening on 3000')
  })
  app.get('/', function(req, res) {
    res.send('Hello World')
  })

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
  })
  app.post('/quotes', (request, response) => {
    console.log('Hellooooooooooooooooo!')
  })
  
const bodyParser= require('body-parser')

// Make sure you place body-parser before your CRUD handlers!
app.use(bodyParser.urlencoded({ extended: true }))

// All your handlers here...
app.get('/', (req, res) => {/*...*/})
app.post('/quotes', (req, res) => {/*...*/})

app.post('/quotes', (req, res) => {
    console.log(req.body)
  })
  
  const MongoClient = require('mongodb').MongoClient

  MongoClient.connect(connectionString, (err, client) => {
    if (err) return console.error(err)
    console.log('Connected to Database')
  })