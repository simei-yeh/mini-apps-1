//establish connection with mongoose server

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});
const db = mongoose.connection;

//check db connection is working
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log(`we're connected!`)
});

//create new schema
const kittySchema = new mongoose.Schema({
  name: String
});


//export schema to the server

const User = mongoose.model('Kitty', kittySchema)


//export user schema to server
module.exports = {User}


