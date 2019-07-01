var inquirer = require("inquirer");
var connection = require("./connection.js");

//make sure it's connected to my local database
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    //you should do connection end, it does not pull you out from the terminal.
    connection.end();
  });