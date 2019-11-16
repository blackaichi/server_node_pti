'use strict';

var databaseModel = {};

var database = require('./databaseConnection').getdb();

const error_msg = "error ocurred";

databaseModel.insert = function(json, callback) {

	  console.log("entro insert");
	  var database = require('./databaseConnection').getdb();
	  var myobj = { "name": json.body.user, "password": json.body.pass };
	  console.log(myobj);
	  database.collection("passwords").insertOne(myobj, function(err, res) {
		if (err) {
	    	console.log("error", err);
	    	callback(500, error_msg);
	    }
	    else {
	    	console.log("1 document inserted"+JSON.stringify(myobj));
	    	callback(null, "1 document inserted");
	    }
	  });
}

databaseModel.find_name = function(names, callback) {

	  console.log("entro find");
	  var database = require('./databaseConnection').getdb();
	  var myquery = { "name": names };
	  console.log(myquery);
	  database.collection("passwords").find(myquery).toArray(function(err, result) {
	    if (err) {
	    	console.log("error", err);
	    	callback(500, error_msg);
	    }
	    else {
	    	console.log(result);
	    	callback(null, result);
	    } 
	  });  
}

databaseModel.show_db = function(callback) {

	  console.log("entro show");
	  var database = require('./databaseConnection').getdb();
	  database.collection("passwords").find({}).toArray(function(err, result) {
	    if (err) {
	    	console.log("error", err);
	    	callback(500, error_msg);
	    }
	    else {
	    	callback(null, result);
	    	console.log(result);
	    }
	  });
}

databaseModel.delete_by_name = function(name,callback) {

	  console.log("entro delete");
	  var database = require('./databaseConnection').getdb();
	  var myquery = { "name": name };
	  database.collection("passwords").deleteMany(myquery, function(err, result) {
	    if (err) {
	    	console.log("error", err);
	    	callback(500, error_msg);
	    }
	    else {
	    	console.log("all document with name: " + name + " deleted");
			callback(null, "all document with name: " + name + " deleted");
	    } 
	  });
}

databaseModel.delete_first = function(name, callback) {

	  console.log("entro delete");
	  var database = require('./databaseConnection').getdb();
	  var myquery = { "name": name };
	  database.collection("passwords").deleteOne(myquery, function(err, result) {
	    if (err) {
	    	console.log("error", err);
	    	callback(500, error_msg);
	    }
	    else {
	    	console.log("document deleted");
	    	callback(null, "document deleted");
	    }
	  });
}
/*
databaseModel.drop_db = function(callback) {

	  console.log("entro drop");
	  var database = require('./databaseConnection').getdb();
	  database.collection("passwords").remove({}, function(err, result) {
	    if (err) {
	    	console.log("error", err);
	    	callback(500, error_msg);
	    }
	    else {
			console.log("deleted all elements");
	    	callback(null, "deleted all elements");
	    }
	  });
}
*/
module.exports = databaseModel;