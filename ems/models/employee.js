/*
=============================================================
; Title:  employee.js
; Author: Nicole Forke
; Modified By: Nicole Forke
; Date:   11 April 2020
; Description: File for the Employee database model.
;============================================================
*/

//require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define employee schema
let EmployeeSchema = new Schema({
  Name: {type: String, required: true},
});


//export the model so its publicly available
module.exports = mongoose.model("Employee", EmployeeSchema);
