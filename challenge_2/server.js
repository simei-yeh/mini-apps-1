const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')
const file = require('./fileHandler.js')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json())

app.use(express.static('client'))

app.get('/', (req, res) => {
  res.sendStatus(200)
})

app.post('/', upload.none(), (req, res) => {
    console.log(req.body)
    res.status(200).json(req.body)
    console.log('received post request!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})