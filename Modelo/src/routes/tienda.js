/* const express = require('express');
const router = express.Router();
 */

 //Modulo para no utilizar excepciones (Try-catch) (No hace falta definir las lineas de arriba)
 const router = require('express-promise-router')();

const {
    obtenerJuegos,
    agregarJuego,
    obtenerJuego,
    actualizarJuego,
    eliminarJuego,
} = require('../controllers/tienda');

router.get('/', obtenerJuegos);
router.post('/', agregarJuego);
router.get('/:idJuego', obtenerJuego);
router.patch('/:idJuego', actualizarJuego);
router.delete('/:idJuego', eliminarJuego);

module.exports = router;