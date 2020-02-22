/*
=======================================
;Title: Assignment 1.5
;Author: Professor Krasso
;Date: 22 February 2020
;Modified By: Nicole Forke
;Description: Creating a Node.js Server
=======================================
*/

/*
  ;Expected Output:
  ;Welcome to the Node.js Server!
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 1.5"));

//create new line
console.log("");

//start program

//variable declaration for node server

var http = require("http");

function processRequest(req, res) {
  var body = "Welcome to the Node.js Server";

  var contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
};

var s = http.createServer(processRequest);

s.listen(8080);

//end program
