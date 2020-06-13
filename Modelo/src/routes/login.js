const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario'); 

router.post('/', async (req, res) => {

    const { email, contrasenia } = req.body;
    const errors = []; 

    const usuario = await Usuario.findOne({Email: email});

    if (!usuario) {
        errors.push({text: 'Usuario no existente'});   
    } else if  (usuario.Contraseña != contrasenia) {
        errors.push({text: 'La contraseña no coincide'});   
    } 

    if (errors.length > 0){
        res.render('login.html', {errors, email, contrasenia});
    } else {

        req.session.usuario = usuario;
        
        req.flash('success_msg', 'Usuario logueado con exito!');
        res.redirect('/mensajes');
        
        //setTimeout("/index", 2000);
    }
    

});

module.exports = router;