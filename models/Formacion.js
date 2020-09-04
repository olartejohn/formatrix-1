var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
var formacionSchema = new Schema({

    login: { type: String, required: [true, 'El login es necesario'] },
    date: { type: Date, required: false, default: Date.now },
    formador: {type: String, required: [true, 'El usuario formador es obligatorio']},
    competencias: { type: String , required: true }, 
    fechaSeguimiento: { type: Date, required: false, default: Date.now },
    acuerdos: { type: String, required: [false, 'Acuerdos'] },
    habilitadores: { type: String , required: false }, 


}, { collection: 'formaciones' });

 
module.exports = mongoose.model('Formacion', formacionSchema);
