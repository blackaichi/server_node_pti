'use strict';

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

exports.getSecret = function () {
	return secret;
};

exports.createToken = function () {

	const id = parseInt(Math.random()*259985698);
	console.log("New token generated with id: "+id);
	var payload = {
		id: id,
		iat: moment().unix(),
		exp: moment().add(30, 'days').unix
	};

	return jwt.encode(payload, secret);
};

const password = 'D8UUr96^p=#5_!5!y3jWZz*JMLuX#X';

//PETITION PASSWORD -> D8UUr96%5Ep%3D%235_!5!y3jWZz*JMLuX%23X

exports.getGrantedPermissionPassword = function() {
	return password;
};