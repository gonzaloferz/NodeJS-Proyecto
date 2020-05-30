const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html');
});


router.get('/contacto', (req, res) => {
    res.render('contacto.html');
});


router.get('/login', (req, res) => {
    res.render('login.html');
});


router.get('/registro', (req, res) => {
    res.render('registro.html');
});


module.exports = router;