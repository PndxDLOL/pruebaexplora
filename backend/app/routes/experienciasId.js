const express = require ("express");
const router = express.Router();
const experienciasId = require('../controladores/experienciasId');


// GET EXPERIENCIA

router.get('/:id', experienciasId.getExperienceId);


// DELETE EXPERIENCIA

router.delete('/:id', experienciasId.deleteExperienceId);

// PUT EXPERIENCIA

router.put('/:id', experienciasId.putExperience);

module.exports = router;