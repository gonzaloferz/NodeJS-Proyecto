//Configuracion para utilizar base de datos

const mysql = require('mysql');

mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    //Debe ir el nombre de la base de datos que cree
    database: 'company'
});

mysqlConnection.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log('La base de datos esta conectada');
    }
})

module.exports = mysqlConnection;

//Para utilizar desde otro script
//const mysqlConnection = require('../database');
//Y un GET similar a cualquier otra peticion

//Para hacer algun query desde el otro script
//mysqlConnection.query('SELECT * FROM empleado', (err, rows, fields) => {..});