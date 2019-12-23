'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//cargar rutas
var routes = require('./routes');


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//configurar cabeceras http
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'POST');
  res.header('Allow','GET', 'POST');

  next();
});

//rutas base
app.use('/', routes);

module.exports = app;
