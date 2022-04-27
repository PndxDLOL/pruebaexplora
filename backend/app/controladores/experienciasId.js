const Experiencias = require('../../models/Experiencias_Model');


function getExperienceId (req, res, next){

    let {id} = req.params;


    try{

        Experiencias.findOne({_id: id}, (err, exp) =>{

            if(err || !exp){
                return res.status(400).json({message: 'No encontramos la experiencia por el ID'});
            }

            return res.status(200).send(exp)
        })

    }
    catch(err){
        next(err);
    }

}

function deleteExperienceId (req, res, next) {

    let {id} = req.params;
    
    
    try{

        Experiencias.findByIdAndDelete({_id: id}, (err, acc) =>{

            if (err || !acc){
                return res.status(400).json({message: 'No pudimos borrar tu experiencia'});
            }

            return res.status(200).json({message: 'Experiencia borrada con exito'})

        })
    }
    catch(err){
        next(err)
    }
}

function putExperience (req, res, next) {
    
    let {id} = req.params;
    let update = req.body;
    

    console.log(update)


    try{

        Experiencias.findByIdAndUpdate({_id: id}, update, (err, acc)=>{
            if(err || !acc){
                return res.status(400).json({message: 'No se pudo actualizar tu experiencia'});
            }
            return res.status(200).json({message: 'Actualizado correctamente', acc, update})
        })

    }
    catch(err){
        next(err)
    }

}

module.exports = {getExperienceId, deleteExperienceId, putExperience}