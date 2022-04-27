const mongoose = require( "mongoose");
const Schema = mongoose.Schema;

let Experiencias = new Schema({

    titulo : {type: String, require: [true, 'Ingresa un titulo']},
    descripcion: {type: String, require: [true, 'Ingresa una descripcion']},
    salaInteractiva: {type: String, enum: ['Acuario', 'Música', 'Vivario', 'Mente', 'En escena', 'Sala abierta', 'Tiempo', 'Sala infantil', ]},
    imgenRelacionada: {type: Object, require: true, default : {url: 'se supone que va una imagen'}},
})




module.exports = mongoose.model('Experiencias', Experiencias)