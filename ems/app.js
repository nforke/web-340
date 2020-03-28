/*
==================================================
; Title:  Assignment 6.4
; Author: Professor Krasso
; Modified By: Nicole Forke
; Date:   28 March 2020
; Description: User Interface using EJS templating
;=================================================
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");

//logger statement
var logger = require("morgan");

//app functions and to look inside views folder for any files
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//logger
app.use(logger("short"));

//route
app.get("/", function(req, res) {
  res.render("index", {
    title: "Employee Records"
  });
});

//create the server and listen on port
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
