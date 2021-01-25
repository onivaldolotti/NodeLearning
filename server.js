const app = require('./app');
const mongoose = require('mongoose');

require('dotenv').config({path:'variables.env'});

//Connection to database
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
// mongoose.Promise = global.Promise;
mongoose.connection.on('error', (error) => {
   console.error("Erro: " + error.message);
});

//Carregando models
require("./models/Post");

app.set('port', process.env.PORT || 7777);
const server = app.listen(app.get('port'), () => {
    console.log("Servidor rodando a porta: " + server.address().port);
});