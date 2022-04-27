const express = require ("express");
const router = express.Router();
const experiencias = require('../controladores/experiencias');


// GET EXPERIENCIAS

router.get('/', experiencias.getExperiences);


// POST EXPERIENCIAS

router.post('/', experiencias.postExperience);

module.exports = router;