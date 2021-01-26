const express = require('express');
const mustache = require('mustache-express');
const router = require('./routes/index');
const helpers = require('./helpers');
const handlers = require('./handlers/errorHandler');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('express-flash');

//middleware
/*
Processo de Login:

- requisição
- validar os campos
- autorizar o usuário
- resposta (Controller)
--positiva
--negativa
 */

//middleware global
/*
--sempre quando usamos app.use é um middleware global
--funcionam independente da url
 */

//middleware local
/*
--são usados em rotas especificas
--são chamados antes do controller
 */

//Configurações
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'))

app.use(cookieParser(process.env.SECRET));
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(flash());

app.use((req, res, next)=> {
    res.locals.h= helpers;
    res.locals.flashes = req.flash();
    next();
});

app.use('/', router);

app.use(handlers.notFound)

app.engine('mst', mustache(__dirname+'/views/partials', '.mst'));
app.set('view engine', 'mst');
app.set('views', __dirname+ '/views');

module.exports = app;