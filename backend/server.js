
var mysql = require('mysql');
var config = require('./config.js'); 
var connection = mysql.createConnection(config);



//open the sql connection
connection.connect(function(err){

    if(err) {
        console.log("error occured while connecting to sql server");
        }
    else {
        console.log("connection created with mysql successfully!");
    }
});

module.exports = connection;