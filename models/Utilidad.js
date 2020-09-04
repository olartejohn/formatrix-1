var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
var utilidadSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre de utilidad de obligatorio'] },
    tipo: { type: String, required: [true, 'El tipo de utilidad es obligatorio'] }


}, { collection: 'Utilidades' });

 
module.exports = mongoose.model('Utilidad', utilidadSchema);