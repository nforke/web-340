/*
=============================================================
; Title:  Assignment 7.3
; Author: Professor Krasso
; Modified By: Nicole Forke
; Date:   04 April 2020
; Description: Demonstrates how to create a Chai test.
;============================================================
*/

//require statements
var fruits = require("../forke-fruits");

var chai = require("chai");
var assert = chai.assert;

//describe specifications
describe("fruits", function() {
  it("should return an array of fruits", function() {
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  });
});
