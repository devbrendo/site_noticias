var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');


var app = express();
app.set('view engine', 'ejs');
app.set('views', './app/views')

app.use(bodyParser.urlencoded({extended: true}));//midware

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .into(app);//rotas, banco e modulos

module.exports = app;