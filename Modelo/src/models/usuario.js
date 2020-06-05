const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    Pais: String,
    Nombre: String,
    Apellido: String,
    FechaDeNacimiento: String,
    Email: String,
    Contraseña: String,
    Juegos: [{
        type: Schema.Types.ObjectId,
        ref: 'videojuego'
    }]
});

module.exports = mongoose.model('usuario', usuarioSchema);

