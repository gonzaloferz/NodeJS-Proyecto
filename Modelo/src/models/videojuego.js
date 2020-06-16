const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const juegoSchema = new Schema({
    Nombre: String,
    Plataforma: String,
    Genero: String,
    Año: String,
    Desarrollador: String,
    Vendidos: { type: Number, default: 0 },
    Imagen: String,
    /* Disponibilidad: Boolean, */
    /* Precio: Number, */
    /* Oferta: Boolean, */
    /* Descuento: Number, */
/*     Compradores: [{
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }]   */
});


module.exports = mongoose.model('videojuego', juegoSchema);