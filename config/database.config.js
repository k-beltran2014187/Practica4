//npm install nodemon -g

var mysql = require('mysql');
var configuracion = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'Practica2017'
}
var connection = mysql.createConnection(configuracion);

module.exports = mysql.createConnection(configuracion);
