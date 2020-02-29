/*
============================================
; Title:  Assignment 2.4
; Author: Professor Krasso
; Date:   29 February 2020
; Modified by: Nicole Forke
; Description: Creates a Node.js server and returns
;              the index.ejs page
;===========================================
*/

//require statements
const http = require("http");

const express = require("express");

const path = require("path");

//intialize the application
let app = express();

//tell express the views are in the 'views' directory
app.set('views', path.resolve(__dirname, 'views'));

//tell express to use the ejs view engine
app.set("view engine", "ejs");

/**
 * Returns the index.ejs page
 */
app.get("/", function(request, response) {
  response.render("index", {
    firstName:"Nicole",
    lastName: "Forke",
    address: "1234 S. 2nd Street\n Beatrice, NE 68310"
  });
});

/**
 * Creates a new server to listen on the port 8080
 */
http.createServer(app).listen(8080, function() {
  console.log("EJS-Views app started on port 8080.");
});
