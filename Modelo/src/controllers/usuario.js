const Usuario = require('../models/usuario');

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
    }

};

//El next se utiliza para enviar el error si se quisiera