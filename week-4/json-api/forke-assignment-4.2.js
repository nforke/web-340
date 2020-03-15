/*
================================================
; Title: Assignment 4.2
; Author: Professor Krasso
; Date: 14 March 2020
; Modified By: Nicole Forke
; Description: Demonstrates how to return JSON from
;              a Node.js server.
=================================================
*/

//require statements
var express = require("express");
var http = require("http");

//initialize the application
var app = express();

//get request routes
app.get("/customer/:id", function(req, res) {
  var id = parseInt(req.params.id, 10);

  //return JSON object
  res.json({
    firstName: "Nicole",
    lastName: "Forke",
    employeeId: id
  });
});

//create server and listen on port
http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080.");
});
