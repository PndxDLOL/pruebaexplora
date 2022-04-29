const Experiencias = require('../../models/Experiencias_Model');
const axios = require('axios')


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

    if (!id){
        return res.status(400).json({message: 'Por favor ingrese el ID de la experiencia a borrar'});
    }
    
    
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

async function putExperienceId (req, res, next) {
    
    let {id} = req.params;
    let update = req.body;

    if(!Object.keys(update).length){
        return res.status(400).json({message: 'Ingrese por lo menos (1) cambio a su experiencia'});
    }
    if (!id){
        return res.status(400).json({message: 'Por favor ingrese el ID de la experiencia a modificar'});
    }

    if(update.titulo){
        
        let nuevaUrl = await generateNewImage(update.titulo);

        update.imagenRelacionada = nuevaUrl
    }



    try{

        Experiencias.findByIdAndUpdate({_id: id}, update, (err, acc)=>{
            if(err || !acc){
                return res.status(400).json({message: 'No se pudo actualizar tu experiencia'});
            }
            return res.status(200).json({message: 'Actualizado correctamente', update})
        })

    }
    catch(err){
        next(err)
    }

}

const generateNewImage = async function (query) {
    let lower = query.toLowerCase();

    let toSearch = lower.replace(" ", ",");

    let busqueda = await axios.get(`https://source.unsplash.com/random/?${toSearch}`);

    let url = busqueda.request.res.responseUrl


    return (url.toString())
}


module.exports = {getExperienceId, deleteExperienceId, putExperienceId}