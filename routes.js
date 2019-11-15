'use strict'

var express = require('express');
var db = require('./databaseModel');
var bodyParser = require('body-parser');
var request = express.request;


var server = express();

server.use(express.json());

server.post('/insert', function(req, res){
	console.log(req.body.user);
	if (db.insert(req) != null) res.status(200).send("error inserting db");
	else res.status(200).send(req.body.pass);
});

server.post('/find_name', function(req, res){
	console.log(req.body.user);
	if (db.find_name(req.body.user) != null) res.send("error find db");
	res.status(200).send(req.body.pass);
});

server.post('/show_db', function(req, res){
	if (db.show_db() != null) res.send("error showing db");
	res.status(200).send(req.body.pass);
});

server.post('/delete_by_name', function(req, res){
	console.log(req.body.user);
	if (db.delete_by_name(req.body.user) != null) res.send("error deleting by name db");
	res.status(200).send(req.body.pass);
});

server.post('/delete_first', function(req, res){
	console.log(req.body.user);
	if (db.delete_first(req.body.user) != null) res.send("error deleting first db");
	res.status(200).send(req.body.pass);
});

server.post('/drop_db', function(req, res){
	if (db.drop_db() != null) res.send("error droping db");
	res.status(200).send(req.body.pass);
});

server.post('/get', function(req, res){
	console.log(req.body.user);
	db.find_name(req);
    res.status(200).send(req.body.pass);
});

server.get('/hello', function(req, res){
	console.log(req.body);
    res.status(200).send(req.body);
});

module.exports = server;
