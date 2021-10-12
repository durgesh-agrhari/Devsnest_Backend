var mongoose = require("mongoose");
var mongodb = "mongodb://127.0.0.1:27017/mydatabase";
mongoose.connect(mongodb, { useNewUrlParser: true, useUnifiedTopology: true }); 

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Mongodb not connected"));