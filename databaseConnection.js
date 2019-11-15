var db;

exports.getdb = function() {
	if (db) return db;
	else {
		db3 = require('mongodb').MongoClient;
		var url = "mongodb://mongo:27017";

		db3.connect(url, { useUnifiedTopology: true, useNewUrlParser: true }, function(err, db2) {
		  if (err) throw err;
		  db = db2.db("mydb");
		  console.log("connection to db created");
		  return db;
		});
	}
};