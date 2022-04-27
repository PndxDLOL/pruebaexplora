const {createClient} = require('pexels');
const Experiencias = require('../../models/Experiencias_Model');
const PEXELS_KEY = process.env.PEXELS_KEY;




function getExperiences (req, res, next){

    try{

        Experiencias.find({}, (err, acc) => {
            if (err || !acc) {
                return res.status(400).json({message: "No se pudo obtener informacion"})
            }
            return res.status(200).send(acc)
        })
    }
    catch(err){
        next(err);
    }
}

function postExperience (req, res, next) {

    try{       
        let {titulo, descripcion, salaInteractiva} = req.body;
        
        let nuevaExperiencia = new Experiencias({
            titulo,
            descripcion,
            salaInteractiva
        })
        
        nuevaExperiencia.imgenRelacionada = generateImage(titulo);
        
        nuevaExperiencia.save((err, exp) => { 
            if (err || !exp){
                return res.status(400).json({message: "No pudimos registrar tu experiencia"})
            }
            return res.status(200).json({message: `Experiencia ${exp.id} creada con exito`})
        })
        
    }
    catch(err){
        next(error)
    }
}


const generateImage = (query) => {    
    const client = createClient(PEXELS_KEY);
    client.photos.search({query, per_page: 1})
    .then(photos => {return photos})

}



module.exports = {getExperiences, postExperience}