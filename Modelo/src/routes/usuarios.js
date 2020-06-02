const express = require('express');
const router = express.Router();

/* const fetch = require('node-fetch'); */

//Hago una peticion Get a otra api (Obtendo datos almacenados en otro lado)
/* router.get('/', async (req, res) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    res.json(users);
}); */

module.exports = router;