const express = require('express');
const app = express();
const path = require('path')

//Settings
app.set('port', 3000)


//Middlewares


//Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});


//Static files



//Listening the server
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});