'use strict'

var express = require('express');
var db = require('./databaseModel');
var bodyParser = require('body-parser');


var server = express.Router();

server.post('/auth', function(req, res){
	res.status(200).send("working server");
});

server.post('/insert', function(req, res){
	console.log(req.body.user);
	db.insert(req, function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	}); 
});

server.post('/find_name', function(req, res){
	console.log("body",req.body);
	console.log(req.body["user"]);
	db.find_name(req.body.user, function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	}); 	
});

server.post('/show_db', function(req, res){
	db.show_db(function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	});
});

server.post('/delete_by_name', function(req, res){
	console.log(req.body.user);
	db.delete_by_name(req.body.user, function(error, result) {
		if (error) res.status(error).send(result);
		else res.status(200).send(result);
	}); 
});

server.post('/delete_first', function(req, res){
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
