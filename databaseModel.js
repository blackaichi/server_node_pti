'use strict';

var databaseModel = {};

var database = require('./databaseConnection').getdb();

databaseModel.insert=function(json) {

	  console.log("entro insert");
	  var database = require('./databaseConnection').getdb();
	  var myobj = { "name": json.body.user, "password": json.body.pass };
	  console.log(myobj);
	  database.collection("passwords").insertOne(myobj, function(err, res) {
	    if (err) return err;
	    console.log("1 document inserted");
	  });
	  return null;
}

databaseModel.find_name=function(names) {

	  console.log("entro find");
	  var database = require('./databaseConnection').getdb();
	  var myquery = { "name": names };
	  console.log(myquery);
	  database.collection("passwords").find(myquery).toArray(function(err, result) {
	    if (err) return err;
	    console.log(result);
	  });
	  return null;
}

databaseModel.show_db=function() {

	  console.log("entro show");
	  var database = require('./databaseConnection').getdb();
	  database.collection("passwords").find({}).toArray(function(err, result) {
	    if (err) return err;
	    console.log(result);
	  });
	  return null;
}

databaseModel.delete_by_name=function(name) {

	  console.log("entro delete");
	  var database = require('./databaseConnection').getdb();
	  var myquery = { "name": name };
	  database.collection("passwords").deleteMany(myquery, function(err, result) {
	    if (err) return err;
	    console.log("all document with name: " + name + " deleted");
	  });
	  return null;
}

databaseModel.delete_first=function(name) {

	  console.log("entro delete");
	  var database = require('./databaseConnection').getdb();
	  var myquery = { "name": name };
	  database.collection("passwords").deleteOne(myquery, function(err, result) {
	    if (err) return err;
	    console.log("1 document deleted");
	  });
	  return null;
}

databaseModel.drop_db=function() {

	  console.log("entro drop");
	  var database = require('./databaseConnection').getdb();
	  database.collection("passwords").remove({}, function(err, result) {
	    if (err) return err;
	    console.log("deleted all elements");
	  });
	  return null;
}

module.exports = databaseModel;