/*
===========================================
;Title: Assignment 2.2
;Author: Nicole Forke
;Date: 28 February 2020
;Modified By: Nicole Forke
;Description: Creates a new server and  listens
;              on port 8080.
===========================================
*/

//require statements
var express = require("express");

var http = require("http");

//call the express function to start a new application
var app = express();

app.use(function(req, res) {

  console.log("In comes a request to: %s", req.url);

  res.end("Hello World\n");
});

//create a new server display message on port 8080
http.createServer(app).listen(8080, function() {
  console.log("Application started on port %s", 8080);
});
