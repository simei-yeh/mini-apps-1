const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  // we're connected!
});

const userSchema = new Schema({
  email: String,
  name: String, // String is shorthand for {type: String}
  password: String
  address: [{
    addressLine1: String, // String is shorthand for {type: String}
    addressLine2: String,
    addressCity: String,
    addressZipCode: Number,
    addressState: String
  }]
  creditCard: [{
    creditCardNo: Number, // String is shorthand for {type: String}
    expiryDate: Date,
    CVV: Number,
    billingZipCode: Number
  }]
});


app.use(express.static('public'))

app.get('/', (req, res) => {
  console.log('received request!')

})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})