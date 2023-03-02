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

MongoClient.connect(connectionString, {
  useUnifiedTopology: true
}, (err, client) => {
  if (err) return console.error(err)
  console.log('Connected to Database')
})
MongoClient.connect(/* ... */)
  .then(client => {
    // ...
    const db = client.db('star-wars-quotes')
    app.use(/* ... */)
    app.get(/* ... */)
    app.post(/* ... */)
    app.listen(/* ... */)
  })
  .catch(console.error)

  MongoClient.connect(/* ... */)
  .then(client => {
    // ...
    const db = client.db('star-wars-quotes')
    const quotesCollection = db.collection('quotes')

    // ...
  })
  app.post('/quotes', (req, res) => {
    quotesCollection.insertOne(req.body)
      .then(result => {
        console.log(result)
      })
      .catch(error => console.error(error))
  })