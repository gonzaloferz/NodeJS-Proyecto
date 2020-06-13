const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html');
});


router.get('/login', (req, res) => {
    res.render('login.html');
});


router.get('/registro', (req, res) => {
    res.render('registro.html');
});


router.get('/mensajes', (req, res) => {
    console.log(req.session.usuario);
    res.render('mensajes.html');

});

router.get('/perfil', (req, res) => {
    //res.render('perfil.html');
});

module.exports = router;