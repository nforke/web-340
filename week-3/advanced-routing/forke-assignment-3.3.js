/*
============================================
; Title: Assignment 3.3
; Author: Professor Krasso
; Date: 07 March 2020
; Modified By: Nicole Forke
; Description: Demonstrates advanced routing
============================================
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//initialize the application
var app = express();

//tell express the views are in the views directory
app.set("views", path.resolve(__dirname, "views"));

//tell express to use the ejs view engine
app.set("view engine", "ejs");

//logger
app.use(logger("dev"));

//route
app.get("/:employeeId", function(req, res) {
  var employeeId = parseInt(req.params.employeeId, 10);

  res.render("index", {
    employeeId: employeeId
  });
});

//create server and listen on port
http.createServer(app).listen(3001, function() {
  console.log("Application started and listening on port %s", 3001);
});
