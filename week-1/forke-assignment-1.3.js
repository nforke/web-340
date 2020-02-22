/*
======================================
;Title: Assignment 1.3
;Author: Professor Krasso
;Date: 22 February 2020
;Modified By: Nicole Forke
;Description: Modules
======================================
*/

/*
  ;Expected Output:
  ;https:
  ;www.example.com
  ;name=forke
*/

//statement that displays personal header
const header = require('./forke-header.js');
console.log(header.display("Nicole", "Forke", "Assignment 1.3"));

//create new line
console.log("");

//start program

//create variable for url

var url = require("url");

var parsedURL = url.parse("https://www.example.com/profile?name=forke");

//output the protocol, host and query of the url

console.log(parsedURL.protocol);

console.log(parsedURL.host);

console.log(parsedURL.query);

//end program
