const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    Pais: String,
    Nombre: String,
    Apellido: String,
    FechaDeNacimiento: String,
    Imagen: String,
    Email: { type: String, unique: true, lowercase: true },
    Contraseña: { type: String },
    FechaDeRegistro: { type: Date, default: Date.now() },
    Juegos: [{
        type: Schema.Types.ObjectId,
        ref: 'videojuego'
    }]
});


module.exports = mongoose.model('usuario', usuarioSchema);

