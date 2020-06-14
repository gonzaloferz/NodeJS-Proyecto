const Tienda= require('../models/videojuego');
const Juego = require('../models/videojuego');

module.exports = {
 
    //GET: Obtenemos todos los juegos
    obtenerJuegos: async (req, res, next) => {
        const juegos = await Tienda.find({});
        //res.status(200).json(juegos);
        //res.render('tienda.html');
        return juegos;
    },

    //POST: Agregamos un nuevo juego
/*     agregarJuego: async (req, res, next) => {
        const nuevoJuego = new Juego(req.body); 
        const juego  = await nuevoJuego.save();
        res.status(200).json(juego);
    }, */

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

    //BUSQUEDA
    buscarJuegos: async (req, res, next) => {
        const { busqueda }= req.body;

        if (busqueda == '') {
            const juegos = await Tienda.find({});
            res.render('tienda.html',{juegos});
        } else {
            const idJuegos = await Tienda.find({ $or: [{"Nombre": {$regex:".*"+busqueda+"", $options:"i"}},
            {"Plataforma": {$regex:".*"+busqueda+"", $options:"i"}},
            {"Genero": {$regex:".*"+busqueda+"", $options:"i"}},
            {"Desarrollador": {$regex:".*"+busqueda+"", $options:"i"}},]},{name:1});
    
            const juegos = [];
            const errors = [];
    
            for (var i=0; i < idJuegos.length; i++){
                juegos.push(await Tienda.findById(idJuegos));
            }
    
            if (juegos.length == 0) { 
                errors.push({text: 'No se encontraron resultados'}); 
                res.render('tienda.html', {errors});
            } else {
                res.render('tienda.html',{juegos});
            }
        }
    },

    filtrarJuegos: async (req, res, next) => {
        const { plataforma }= req.query;
        //const juegos = await Tienda.find({Plataforma: plataforma});

        console.log(plataforma);

/*         if (!juegos) {
            req.flash('error_msg', 'No se encontraron resultados');
            res.render('tienda.html');
        } else {
            res.render('tienda.html',{juegos});
        } */
    },
 
};