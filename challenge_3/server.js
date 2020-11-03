const express = require('express')
const app = express()
const port = 3000
const db = require('./db.js')
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log('received request!')
})

app.post('/users', (req, res) => {
  const person = new db.User(req.body.submission)
  console.log(req.body.submission)
  person.save((err, person) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(person);
    }
  })
})

app.put('/address', (req, res) => {
  const update = req.body.submission;
  db.User.findByIdAndUpdate(req.body.id, {'address' : update}, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(docs);
      res.status(201).json(docs._id);
    }
  });
})

app.put('/creditcard', (req, res) => {
  const update = req.body.submission;
  console.log('update', update);
  db.User.findByIdAndUpdate(req.body.id, {'creditCard' : update}, (err, docs) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(docs);
      res.status(201).json(docs._id);
    }
  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})