const axios = require('axios');
const mongoose = require( "mongoose");
const Schema = mongoose.Schema;

let Experiencias = new Schema({

    titulo : {type: String, require: [true, 'Ingresa un titulo']},
    descripcion: {type: String, require: [true, 'Ingresa una descripcion']},
    salaInteractiva: {type: String, enum: ['acuario', 'musica', 'vivario', 'mente', 'en escena', 'sala abierta', 'tiempo', 'sala infantil', ]},
    imgenRelacionada: {type: String, default : 'http://source.unsplash.com/random/'},
    imagen: {type: String, require: true, default: 'https://mir-s3-cdn-cf.behance.net/projects/404/f8e5f189287969.Y3JvcCw5OTksNzgyLDAsMTA4.jpg'}
})

Experiencias.methods.generateImage = async function (query) {
    let lower = query.toLowerCase();

    let toSearch = lower.replace(" ", ",");

    let busqueda = await axios.get(`https://source.unsplash.com/random/?${toSearch}`);

    let url = busqueda.request.res.responseUrl


    return (url.toString())
}




module.exports = mongoose.model('Experiencias', Experiencias)