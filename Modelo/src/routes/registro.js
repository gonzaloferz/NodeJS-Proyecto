const express = require('express');
const router = express.Router();


//Validar registro
router.post('/', (req, res) => {
    const { pais, nombre, apellido, dia, mes, año, email, contraseña } = req.body;

    if ( typeof nombre  !== 'string'){
        throw new Error('Tipo invalido')
    }
    
    if ( typeof apellido !== 'string'){
        throw new Error('Tipo invalido')
    }
    
    if ( typeof dia !== 'number'){
        throw new Error('Tipo invalido')
    }
    
    if ( typeof año !== 'number'){
        throw new Error('Tipo invalido')
    }
    
})

module.exports = router;