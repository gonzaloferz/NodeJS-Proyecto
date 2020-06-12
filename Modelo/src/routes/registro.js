const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario'); 


function validarMes(mes){

    let anioNumero;
    
    switch (mes) {

        case 'Enero': anioNumero="01";
            break;

        case 'Febrero': anioNumero="02";
            break;
        
        case 'Marzo': anioNumero="03";
            break;  
            
        case 'Abril': anioNumero="04";
            break;

        case 'Mayo': anioNumero="05";
            break;

        case 'Junio': anioNumero="06";
            break;

        case 'Julio': anioNumero="07";
            break;

        case 'Agosto': anioNumero="08";
            break;

        case 'Septiembre': anioNumero="09";
            break;

        case 'Octubre': anioNumero="10";
            break;

        case 'Noviembre': anioNumero="11";
            break;

        case 'Diciembre': anioNumero="12";
            break;

    }

    return anioNumero;
}

//Validar registro
router.post('/', async (req, res) => {

    const { pais, nombre, apellido, dia, mes, anio, email, contrasenia } = req.body;
    const errors = []; 

    //Pais y mes no hace falta validar ya que son selects.

    const emailUsuario = await Usuario.findOne({Email: email});

    if (emailUsuario){
        errors.push({text: 'Usuario ya existente'});   
    } 

    if (nombre.length < 4)  {
        errors.push({text: 'El nombre debe contener al menos 4 caracteres'});
    }
    
    if (!/^[A-Za-z]+$/.test(nombre)) {
        errors.push({text: 'El nombre solo debe contener letras'});
    }

    if (apellido.length < 4)  {
        errors.push({text: 'El apellido debe contener al menos 4 caracteres'});
    }
    
    if (!/^[A-Za-z]+$/.test(apellido)) {
        errors.push({text: 'El apellido solo debe contener letras'});
    }

    if (!/^[0-9][0-9]$/.test(dia)) {
        errors.push({text: 'El dia debe ingresarse con dos numeros'});
    }

    if (!/^[0-9][0-9]$/.test(anio)) {
        errors.push({text: 'El año debe ingresarse con dos numeros'});
    }

    if (contrasenia.length < 6) {
        errors.push({text: 'La contrasenia debe contener al menos 6 caracteres'});
    }

    if (errors.length > 0){
        res.render('registro.html', {errors, pais, nombre, apellido, dia, mes, anio, email, contrasenia});
    } else {

        const fechaDeNacimiento = dia+"/"+validarMes(mes)+"/"+anio;

        const nuevoUsuario = new Usuario({pais, nombre, apellido, fechaDeNacimiento, email, contrasenia});
        await nuevoUsuario.save();
        req.flash('sucess_msg', 'Usuario registrado con exito!')
        res.redirect('index.html');
    }
    

});

module.exports = router;