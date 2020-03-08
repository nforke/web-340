/*
================================================
; Title: Assignment 3.4
; Author: Professor Krasso
; Date: 07 March 2020
; Modified By: Nicole Forke
; Description: Base server configurations for a
;              fully working Express application.
=================================================
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan")

//initialize the application
var app = express();

//tell express the views are in the view directory
app.set("views", path.resolve(__dirname, "views"));

//tells express to use the ejs view engine
app.set("view engine", "ejs");

//logger
app.use(logger("short"));

//routes
app.get("/", function(req, res) {
  res.render("index", {
    message: "home page"
  });
});

app.get("/about", function(req, res) {
  res.render("about", {
    message: "about page"
  });
});

app.get("/contact", function(req, res) {
  res.render("contact", {
    message: "contact page"
  });
});

app.get("/products", function(req, res) {
  res.render("products", {
    message: "products page"
  });
});

//create server and listen on port
http.createServer(app).listen(8080, function() {
  console.log("Application started and listening on port %s.", 8080)
});
