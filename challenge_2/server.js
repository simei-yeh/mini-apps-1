const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static('client'))

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post('/', (req, res) => {
  console.log('received post request!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})