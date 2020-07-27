const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const tiendaSchema = new Schema({
    /* Disponibilidad: Boolean, */
    /* Precio: Number, */
    /* Oferta: Boolean, */
    /* Descuento: Number, */
    Juegos: [{
        type: Schema.Types.ObjectId,
        ref: 'videojuego'
    }]  
});


module.exports = mongoose.model('tienda', tiendaSchema);