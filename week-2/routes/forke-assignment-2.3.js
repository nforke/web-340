/*
============================================
; Title:  Assignment 2.3
; Author: Nicole Forke
; Date:   29 February 2020
; Modified by: Nicole Forke
; Description: Demonstrates Express route behaviors
;===========================================
*/

//require statements
var express = require("express");

var http = require("http");

//intialize the application
var app = express();

//routes
app.get("/", function(req, res) {
  res.end("Welcome to the homepage!\n");
});

app.get("/about", function(req, res) {
  res.end("Welcome to the about page!\n");
});

app.get("/contact", function(req, res) {
  res.end("Welcome to the contact page!\n");
});

app.use(function(req, res) {
  res.statusCode = 404;
  res.end("404!\n");
});

//create a new server and listen on a port
http.createServer(app).listen(3000, function() {
  console.log("Application started on port %s", 3000);
});
