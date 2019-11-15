'use strict';

var app = require('./app');

var port = process.env.PORT || 8000;

app.listen(port, function(){
	console.log("Running server... http://localhost:"+port);
});