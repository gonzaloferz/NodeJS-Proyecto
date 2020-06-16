const Usuario = require('../models/usuario');
const Juegos = require('../models/videojuego');

module.exports = {
 
    //GET: Obtenemos todos los usuarios
    obtenerUsuarios: async (req, res, next) => {
        const usuarios = await Usuario.find({});
        res.status(200).json(usuarios);
    },

    //POST: Agregamos un nuevo usuario
    agregarUsuario: async (req, res, next) => {
        const nuevoUsuario = new Usuario(req.body); 
        const usuario = await nuevoUsuario.save();
        res.status(200).json(usuario);
    },

    //GET: Obtenemos un usuario a traves de su ID
    obtenerUsuario: async (req, res, next) => {
        const { idUsuario }= req.params;
        const usuario = await Usuario.findById(idUsuario);
        res.status(200).json(usuario);
    },

    //PUT: Reemplazamos todos los campos de usuario por los campos de otro usuario
    reemplazarUsuario: async (req, res, next) => {
        const { idUsuario }= req.params;
        const nuevoUsuario = req.body;
        //Devuelve el usuario viejo
        const viejoUsuario = await Usuario.findByIdAndUpdate(idUsuario, nuevoUsuario);
        res.status(200).json({Success: true});
    },

    //PATCH: Actualizamos un campo de un usuario a traves de su ID 
    //El codigo es el mismo al de reemplazarUsuario
    //La diferencia esta en la peticion o endpoint con el cual se utiliza la funcion
    actualizarUsuario: async (req, res, next) => {
        const { idUsuario }= req.params;
        const nuevoUsuario = req.body;
        //Devuelve el usuario viejo
        const viejoUsuario = await Usuario.findByIdAndUpdate(idUsuario, nuevoUsuario);
        res.status(200).json({Success: true});
    },

    //DELETE: Eliminamos un usuario a traves de su ID
    eliminarUsuario: async (req, res, next) => {
        const { idUsuario }= req.params;
        const usuario = await Usuario.findByIdAndRemove(idUsuario);
        res.status(200).json({Success: true});
    },

    obtenerJuegosUsuario: async (req, res, next) => {
        const { idUsuario }= req.params;
        const usuario = await Usuario.findById(idUsuario);
        //res.status(200).json(usuario.Juegos);
        const juegos = usuario.Juegos;

        if (juegos.length == 0) {
            req.flash('error_msg', 'No se encontraron resultados');
            res.render('datos.html', {usuario});
        } else {
            res.render('datos.html', {usuario, juegos});
        }
    },

    agregarJuegoUsuario: async( req, res, next) => {
        const { idUsuario }= req.params;
        const nuevoJuego = new Juegos(req.body);
        const usuario = await Usuario.findById(idUsuario);
        nuevoJuego.Compradores = usuario;
        await nuevoJuego.save();
        usuario.Juegos.push(nuevoJuego);
        await usuario.save();
        res.status(200).json(usuario);
    },

    //GET: Obtenemos un usuario a traves de su ID
    obtenerUsuarioPorEmail: async (req, res, next) => {
        const emailUsuario= req.params.email;

        const usuario = await Usuario.findOne({Email: emailUsuario});
        //res.status(200).json(usuario);

        res.render('datos.html', {usuario});
    },

};

//El next se utiliza para enviar el error si se quisiera