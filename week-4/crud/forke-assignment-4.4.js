/*
================================================
; Title: Assignment 4.4
; Author: Professor Krasso
; Date: 14 March 2020
; Modified By: Nicole Forke
; Description: Demonstrates CRUD operations in
;              Node.js API.
=================================================
*/

//require statments
var express = require("express");
var http = require("http");

//initialize application
var app = express();

//get request route
app.get("/", function(req, res) {
  res.send("API invoked as an HTTP GET request.");
});

//put request route
app.put("/", function(req, res) {
  res.send("API invoked as an HTTP PUT request.");
});

//post request route
app.post("/", function(req, res) {
  res.send("API invoked as an HTTP POST request.");
});

//delete request route
app.delete("/", function(req, res) {
  res.send("API invoked as an HTTP DELETE request.");
});

//create the server and listen on port
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
