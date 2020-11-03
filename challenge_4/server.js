const express = require('express')
const app = express()
const port = 8080
const bodyParser = require('body-parser')


app.use(express.static('client/dist'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World! this is server side')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

