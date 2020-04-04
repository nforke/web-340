/*
=============================================================
; Title:  Assignment 7.2
; Author: Professor Krasso
; Modified By: Nicole Forke
; Date:   04 April 2020
; Description: Demonstration on how to create a TDD unit test
;============================================================
*/

//require statements
var assert = require("assert");

//describes specifications
describe("String#split", function() {
  it("should return an array of fruits", function() {
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
  });
});

//passed function
function getFruits(str) {
  return str.split(",");
};

module.exports = getFruits;
