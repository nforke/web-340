/*
================================================
; Title: Assignment 4.3
; Author: Professor Krasso
; Date: 14 March 2020
; Modified By: Nicole Forke
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
=================================================
*/

//require statements
var express = require("express");
var http = require("http");

//initialize the application
var app = express();

//get request routes
app.get("/not-found", function(req, res) {
  //returned status code
  res.status(404);
  //return json object
  res.json( {
    error: "Oops site not found."
  });
});

app.get("/ok", function(req, res) {
  //returned status code
  res.status(200);
  //return json object
  res.json( {
    message: "Yippy skippy the page loaded correctly."
  });
});

app.get("/not-implemented", function(req, res) {
  //returned status code
  res.status(501);
  //returned json object
  res.json( {
    error: "Oops, page not implemented."
  });
});

//create server and listen on port
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
