const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const db = mongoose.connection;



db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log(`we're connected!`);
});

const userSchema = new mongoose.Schema({
  email: String,
  name: String, // String is shorthand for {type: String}
  password: String,
  address: [{
    addressLine1: String, // String is shorthand for {type: String}
    addressLine2: String,
    addressCity: String,
    addressZipCode: Number,
    addressState: String
  }],
  creditCard: [{
    creditCardNo: Number, // String is shorthand for {type: String}
    expiryDate: Date,
    CVV: Number,
    billingZipCode: Number
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = {User};
