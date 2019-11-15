'use strict';

var jwt = require('jwt-simple');
var moment = require('moment');

const secret = 'c0535e4be2b79ffd93291305436bf889314e4a3faec05ecffcbb7df31ad9e51a';
exports.createToken = function(email){
  var payload = {
    email: email,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix
  };
  return jwt.encode(payload, secret);
};

const secretAdmin = '22E6C80CC4B44D6D7DE9C7EEF13CEA958E285CE1D70FFFEAC70BF65ABB4E21F2';
exports.createAdminToken = function(usuario){
  var payload = {
    id: usuario.idUsuario,
    nombre: usuario.nombre,
    email: usuario.email,
    iat: moment().unix(),
    exp: moment().add(30, 'days').unix
  };
  return jwt.encode(payload, secretAdmin);
};
