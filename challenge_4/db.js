var Sequelize = require('sequelize');
var sequelize = new Sequelize('connectfour', 'student', 'student', {dialect: 'mysql'});


var ConnectFour = sequelize.define('ConnectFour', {

});

