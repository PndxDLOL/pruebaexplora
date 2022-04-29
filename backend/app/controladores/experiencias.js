const Experiencias = require('../../models/Experiencias_Model');





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

async function postExperience (req, res, next) {

    try{       
        let {titulo, descripcion, salaInteractiva, imagen} = req.body;

        if(!titulo){
            return res.status(400).json({message: 'Por favor ingresa un titulo a tu experiencia'});
        }
        if(!descripcion){
            return res.status(400).json({message: 'Por favor ingresa una breve descripción de tu experiencia'});
        }
        if(!salaInteractiva){
            return res.status(400).json({message: 'Por favor selecciona la Sala Interactiva donde viviste tu experiencia'});
        }
        if(!imagen){
            return res.status(400).json({message: 'Por favor compartenos una imagen de tu experiencia'});
        }


        let nuevaExperiencia = new Experiencias({
            titulo,
            descripcion,
            salaInteractiva,
            imagen
        })
        
        nuevaExperiencia.imgenRelacionada =  await nuevaExperiencia.generateImage(titulo);
    

        
        nuevaExperiencia.save((err, exp) => { 
            if (err || !exp){
                return res.status(400).json({message: `No pudimos registrar tu experiencia ${err}`})
            }
        
            return res.status(200).json({message: `Experiencia ${exp.id} creada con exito`})
        })
        
    }
    catch(err){
        next(err)
    }
}



module.exports = {getExperiences, postExperience}