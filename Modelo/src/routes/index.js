const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html');
});

router.get('/tienda', async (req, res) => {
    const tienda = require('../controllers/tienda');
    const juegos = await tienda.obtenerJuegos();

    res.render('tienda.html', {juegos});
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

router.get('/registro', (req, res) => {
    res.render('registro.html');
});

router.get('/mensajes', (req, res) => {
    res.render('mensajes.html');

});

router.get('/perfil', (req, res) => {
    //res.render('perfil.html');
});

module.exports = router;