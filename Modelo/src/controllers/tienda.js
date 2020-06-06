const Tienda= require('../models/videojuego');
const Juego = require('../models/videojuego');

module.exports = {
 
    //GET: Obtenemos todos los juegos
    obtenerJuegos: async (req, res, next) => {
        const juegos = await Tienda.find({});
        res.status(200).json(juegos);
    },

    //POST: Agregamos un nuevo juego
    agregarJuego: async (req, res, next) => {
        const nuevoJuego = new Juego(req.body); 
        const juego  = await nuevoJuego.save();
        res.status(200).json(juego);
    },

    //GET: Obtenemos un juego a traves de su ID
    obtenerJuego: async (req, res, next) => {
        const { idJuego }= req.params;
        const juego = await Tienda.findById(idJuego);
        res.status(200).json(juego);
    },

    //PATCH: Actualizamos un campo de un juego a traves de su ID 
    actualizarJuego: async (req, res, next) => {
        const { idJuego }= req.params;
        const nuevoJuego = req.body;
        //Devuelve el usuario viejo
        const viejoJuego = await Tienda.findByIdAndUpdate(idJuego, nuevoJuego);
        res.status(200).json({Success: true});
    },

    //DELETE: Eliminamos un juego a traves de su ID
    eliminarJuego: async (req, res, next) => {
        const { idJuego }= req.params;
        const juego = await Tienda.findByIdAndRemove(idJuego);
        res.status(200).json({Success: true});
    },
 
};