const Experiencias = require('../../models/Experiencias_Model');


function getExperiencesSalas (req, res, next){

    let {nombre} = req.params;

    if(!nombre){
        return res.status(400).json({message: 'Ingresa el nombre de la sala que deseas buscar'})
    }


    try{
    

        Experiencias.find({salaInteractiva: {$regex: nombre, $options: 'i'}}, (err, exp) => {
            if(err || !exp){
                return res.status(400).json({message: 'No obtuvimos experiencias por esta sala'});
            }

            return res.status(200).json({message: 'Filtro con exito', exp})
        })

    }
    catch(err){
        next(err)
    }

}


module.exports = {getExperiencesSalas}