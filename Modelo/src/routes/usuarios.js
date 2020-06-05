/* const express = require('express');
const router = express.Router();
 */

 //Modulo para no utilizar excepciones (Try-catch) (No hace falta definir las lineas de arriba)
 const router = require('express-promise-router')();

const {
    obtenerUsuarios,
    agregarUsuario,
    obtenerUsuario,
    reemplazarUsuario,
    actualizarUsuario,
    eliminarUsuario
} = require('../controllers/usuario');

router.get('/', obtenerUsuarios);
router.post('/', agregarUsuario);
router.get('/:idUsuario', obtenerUsuario);
router.put('/:idUsuario', reemplazarUsuario);
router.patch('/:idUsuario', actualizarUsuario);
router.delete('/:idUsuario', eliminarUsuario);

module.exports = router;