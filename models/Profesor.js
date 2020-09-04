var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
var profesorSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre es necesario'] },
    email: { type: String, required: [true, 'El email es el usuario del profe'] },
    tipo: { type: Schema.Types.ObjectId, ref: 'Utilidad', required: false }


}, { collection: 'profesores' });

 
module.exports = mongoose.model('Profesor', profesorSchema);
