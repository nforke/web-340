/*
=============================================================
; Title:  employee.js
; Author: Nicole Forke
; Modified By: Nicole Forke
; Date:   04 April 2020
; Description: File for the Employee database model.
;============================================================
*/

//require statements
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//define employee schema
let EmployeeSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true}
});

//define the employee model
var employee = mongoose.model("employee", EmployeeSchema);

//export the model so its publicly available
module.exports = mongoose.model("Employee", EmployeeSchema);
