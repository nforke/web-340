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
var mongoose = require("mongoose");
var path = require("path");
var logger = require("morgan");

//map the EmployeeSchema to the employee model
var employee = require("./models/employee");

//mLab connection
var mongoDB = "mongodb+srv://new_user:doodle-3@buwebdev-cluster-1-bznkj.mongodb.net/dev";
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
})

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

app.get("/new", function(req, res) {
  res.render("new", {
    title: "Add Employee"
  });
});

app.get("/list", function(req, res) {
  res.render("list", {
    title: "Employee Records"
  });
});

//create the server and listen on port
http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080!");
});
