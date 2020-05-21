const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index.html');
});


router.get('/contacto', (req, res) => {
    res.render('contacto.html');
});


module.exports = router;