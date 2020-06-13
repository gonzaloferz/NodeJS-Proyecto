const express = require('express');
const app = express();
//Para inicializar la base de datos Mongo DB
const mongoose = require('mongoose');
//Permite enlazar las rutas independientemente del SO
const path = require('path');
//const morgan = require('morgan');
const session = require('express-session');
const flash = require('connect-flash');

mongoose.Promise = global.Promise;
//Inicializo la DB
mongoose.connect('mongodb://localhost/TiendaVideojuegos', {
    /* useMongoClient: true, */
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then( db => console.log('La base de datos esta conectada...'))
    .catch( err => console.log(err));

//Settings
//setea el puerto en la posicion indicada o donde el servicio de la nuve indique 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile); 
app.set('view engine', 'ejs');
//Acomoda el formato Json
app.set('json spaces', 2);


//Middlewares
//Da informacion al servidor sobre algun error
//app.use(morgan('dev'));
//Permite al servidor entender los datos que llegue de formularios
app.use(express.urlencoded({extended: false}));
//Permite al servidor entender los formatos Json
app.use(express.json());
app.use(session({
    secret: 'mysecretapp',
    resave: true,   
    saveUninitialized: true //La sesion es un objeto. Con esto almacenamos en la base de datos el objeto vacio
}));
app.use(flash()); 

//Global Variables
app.use((req,res, next) => {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');

    res.locals.usuarioLogueado = req.flash('usuario');

    next();
});


//Routes
app.use(require('./routes/index'));
app.use('/registro', require('./routes/registro'));
app.use('/login', require('./routes/login'));
app.use('/usuarios', require('./routes/usuarios'));
app.use('/tienda', require('./routes/tienda'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Listening the server
app.listen(app.get('port'), () => {
    console.log('Servidor escuchando en el puerto', app.get('port'));
});