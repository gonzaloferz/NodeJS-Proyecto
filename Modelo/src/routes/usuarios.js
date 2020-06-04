/* const express = require('express');
const router = express.Router();
 */

 //Modulo para no utilizar excepciones (Try-catch) (No hace falta definir las lineas de arriba)
 const router = require('express-promise-router')();

const {
    index
} = require('../controllers/usuario');

router.get('/', index);

module.exports = router;