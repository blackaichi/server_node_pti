'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'c0535e4be2b79ffd93291305436bf889314e4a3faec05ecffcbb7df31ad9e51a';
var secretadmin = '1C64A61C9921169B3423E0FC7B7039228711D5C3635FE9BBE6AA48DE14BC2EDD0FBC3FE42D55D32BA7E53F3FEABB1E5DD91AA74BA965C8C50AF090A39BE079DC';

exports.ensureAuth = function(req, res, next){
  if (!req.headers.authorization){
    return res.status(403).send({message: "La petición no tiene la cabecera de auth."});
  }

  var token = req.headers.authorization.replace(/['"]+/g, '');

  try{
    var payload = jwt.decode(token, secret);

    if (payload.exp <= moment().unix()){
      return res.status(401).send({message: "Token ha expirado"});
    }
  } catch(ex){
    return res.status(404).send({message: "Token no válido"});
  }

  req.user = payload;

  next();
};
exports.ensureAdminAuth = function(req, res, next){
  if (!req.headers.authorization){
    return res.status(403).send({message: "La petición no tiene la cabecera de auth."});
  }

  var token = req.headers.authorization.replace(/['"]+/g, '');

  try{
    var payload = jwt.decode(token, secretadmin);

    if (payload.exp <= moment().unix()){
      return res.status(401).send({message: "Token ha expirado"});
    }
  } catch(ex){
    return res.status(404).send({message: "Token no válido"});
  }

  req.user = payload;

  next();
};
