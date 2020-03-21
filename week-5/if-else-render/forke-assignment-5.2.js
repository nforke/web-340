/*
============================================
; Title:  Assignment 5.2
; Author: Professor Krasso
; Modified By: Nicole Forke
; Date:   21 March 2020
; Description: Demonstrates EJS layouts.
;===========================================
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");//find app where our views are being saved

//app functions and to look inside views folder for any files
var app = express();
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

//local friends array (data displayed in ejs page)
var friends = [
  "Amie",
  "Mylee",
  "Jada",
  "Tatum"
];

//get request route
app.get("/", function(req, res) {
  res.render("index", {
    names: friends
  });
});

//create the server and listen on port
http.createServer(app).listen(3000, function() {
  console.log("Application started on port 3000!");
});
