/*
==============================================
; Title:  Assignment 6.3
; Author: Professor Krasso
; Modified By: Nicole Forke
; Date:   27 March 2020
; Description: Setting up a MongoDB connection
;=============================================
*/

//require statements
var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

//mLab connection
var mongoDB = "mongodb+srv://new_user:doodle-3@buwebdev-cluster-1-bznkj.mongodb.net/dev";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB");
});

//application
var app = express();
app.use(logger("dev"));

//create server
http.createServer(app).listen(3000, function() {
  console.log("Application connected to port 3000!");
});
