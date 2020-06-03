/* const express = require('express');
const router = express.Router();
 */

 const router = require('express-promise-router')();

const {
    index
} = require('../controllers/usuario');

router.get('/', index);

module.exports = router;