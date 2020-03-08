/*
=================================================
; Title: Assignment 3.2
; Author: Professor Krasso
; Date: 07 March 2020
; Modified By: Nicole Forke
; Description: Demonstrates how to configure the
;              Morgan logger
=================================================
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");

//initialize the application
var app = express();

//tell express the views are in the 'views' directory
app.set("views", path.resolve(__dirname, "views"));

//tell express to use the ejs view engine
app.set("view engine", "ejs");

//logger
app.use(logger("short"));

//route
app.get("/", function(req, res) {
  res.render("index", {
    message: "Welcome to my first Morgan Logger example!"
  });
});

//create server and listen on port
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080")
});
