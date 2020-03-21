/*
================================================
; Title:  Assignment 5.3
; Author: Professor Krasso
; Modified By: Nicole Forke
; Date:   21 March 2020
; Description: Demonstrates the Pug view Engine.
;===============================================
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var pug = require("pug");

//app functions and to look inside views folder for any files
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

//get request route
app.get("/", function(req, res) {
  res.render("index", {
    message: "Look at that I used a Pug based template for the first time!"
  });
});

//create the server and listen on port 3000
http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000!");
});
