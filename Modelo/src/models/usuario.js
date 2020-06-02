const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    Pais: "Argentina",
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

module.exports = mongoose.model('user', userSchema);

