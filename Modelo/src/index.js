const express = require('express');
const app = express();
const path = require('path');
//const morgan = require('morgan');


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


//Routes
app.use(require('./routes/index'));
app.use('/api/movies', require('./routes/movies'));
app.use('/api/users', require('./routes/users'));


//Static files
app.use(express.static(path.join(__dirname, 'public')));


//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});