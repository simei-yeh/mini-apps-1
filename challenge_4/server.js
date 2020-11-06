const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const db = require('./db.js')

app.use(express.static('client/dist'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  //fix kitty

})

app.post('/', (req, res) => {
  console.log(req.body)
  res.status(201).send('Hello World! this is server side')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

