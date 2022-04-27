const express = require ("express");
const router = express.Router();
const salas = require('../controladores/salas');


// GET EXPERIENCIA POR SALA

router.get('/:nombre', salas.getExperiencesSalas);



module.exports = router;