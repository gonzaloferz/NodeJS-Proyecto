const express = require('express');
const app = express();
const path = require('path');


//Settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));


//Middlewares


//Routes
app.use(require('./routes/'));


//Static files


//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});