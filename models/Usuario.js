var mongoose = require('mongoose');
var Schema = mongoose.Schema;

 
var usuarioSchema = new Schema({

    nombre: { type: String, required: [true, 'El nombre del usuario es obligatorio'] },
    password:{type: String, requierd:[true, 'La contraseña del usuario es obligatoria']},
    correo: { type: String, required: [true, 'El correo del usuario es obligatorio'] },
    rol: { type: String, required: [true, 'El rol del usuario es obligatorio'] }


}, { collection: 'Usuarios' });

 
module.exports = mongoose.model('Usuario', usuarioSchema);