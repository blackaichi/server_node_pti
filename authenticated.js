'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');

const secret =  'MIICXAIBAAKBgQCY100J8U/gG3PU4yDDgMSycpRVAXBmoYe+jllQ44l95VJyPj+5'+
				'0KGoIFdffaHy9uzCA97OWgMoyHEAyt6Dc7bpZnW0v19TVut+FDI2Axqbh/MZpxxP'+
				'221MZYpMVatpdUZRxcc3bNG3TmI0G1f7hJczxPDLahLDZRtG6VKJz5zhTwIDAQAB'+
				'AoGAS48Mn+CzOzh3IASU+vGazBlG6WtHtQUgBX17/DgwjZOkGaRafrL8aBBtAWEr'+
				'geC+lP+y01K+gxfsfZbNQDEheCZ6J6YbhwP+N+S1bVdeCsUSrEbSB3h7WXWOi0Bn'+
				'm9w/46D2URTokS7GJn4V4ArFPEw6zD+W1gnOKtuUouNsVIECQQDdxQV/o0ILPeMN'+
				'ayQNFaPVtM7AFrqDFt6Hqm9vvIBVecQL1uHE1CXBAYBuSjtfEB/XwL0Ux6Q4gRWZ'+
				'9k8kPuBBAkEAsG6knItEXd2RhYXPu4GEedrZhzK66Z2ZJtg3PHaj4HRx+Df8H26Z'+
				'NshmFORckzCoqQdgGj66MDIkBY56l4ZdjwJAMlJdoAvUlaZyWf4gzRNG/NwtOesu'+
				'YUaUMiabaLhWSo75zFHzIu2cr4H+uYgAlt6ayyNCBHAUtHmeBDSe2rOlwQJAP7d1'+
				'k2NoSU3fZA0zPFBF+4vhy0Wy4vObf7/OEvP1svXawv3U+7UBeBtfYmQmWrHT91dG'+
				'ibPloco54BfYhihsWQJBANo7oPC03s1z8BqqdSztwPyvgdIjKO6ikL7bwId/b7VJ'+
				'ao5JV2lVMROnViQ3tvEk7XTWR1me9vREXdC2Z8PI4qg=';

exports.ensureAuth = function (req, res, next) {
  if (!req.headers.authorization){
    return res.status(403).send({message: "La petición no tiene la cabecera de auth."});
  }

  var token = req.headers.authorization.replace(/['"]+/g, '');
  console.log(token);
  try {

    var payload = jwt.decode(token, secret);

    if ( payload.exp <= moment().unix() ) {
      return res.status(401).send({message: "Token ha expirado"});
    }

  } catch( ex ) {

    return res.status(404).send({message: "Token no válido"});
  }

  req.user = payload;
  next();
};