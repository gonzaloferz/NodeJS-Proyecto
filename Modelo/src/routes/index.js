const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/noticias', (req, res) => {
    res.render('noticias.html');
});

router.get('/contacto', (req, res) => {
    res.render('contacto.html');
});

router.get('/login', (req, res) => {
    res.render('login.html');
});

router.get('/logout', (req, res) => {
    req.flash('success_msg', 'Se cerro la sesion con exito!');
    delete req.session.email;
    res.redirect('/mensajes');
});

router.get('/registro', (req, res) => {
    res.render('registro.html');
});

router.get('/mensajes', (req, res) => {
    res.render('mensajes.html');
});

module.exports = router;