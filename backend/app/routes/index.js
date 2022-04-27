const express = require('express');
const router = express.Router();
const experiencias = require('./experiencias');
const experienciasId = require('./experienciasId');
const salas = require('./salas')

router.use('/', experiencias);
router.use('/', experienciasId);
router.use('/salas', salas);



module.exports = router;