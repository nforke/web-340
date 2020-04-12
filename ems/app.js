/*
==================================================
; Title:  Assignment 8.3
; Author: Professor Krasso
; Modified By: Nicole Forke
; Date:   11 April 2020
; Description: Server file for EMS project
;=================================================
*/

//require statements
var express = require("express");
var http = require("http");
var path = require("path");
var logger = require("morgan");
var helmet = require("helmet");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var csrf = require("csurf");
var mongoose = require("mongoose");

//map the EmployeeSchema to the employee model
const Employee = require("./models/employee");

/**
 * Establishes a database connection to MongoDB (mlab).
 * Use the credentials of the "user" not  personal login info.
 */
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
});

/**
 * Setup CSRF protection
 */
var csrfProtection = csrf({cookie: true});

/**
 * Initialize the express application
 */
var app = express();

/**
 * Configures the dependency libraries.
 */
// Morgan logger
app.use(logger("short"));

// Body parser
app.use(
  bodyParser.urlencoded({
    extended: true
})
);

// Cookie parser
app.use(cookieParser());

// Helmet
app.use(helmet.xssFilter());

// CSRF protection
app.use(csrfProtection);

/**
 * Intercepts all incoming requests and adds a CSRF token to the response.
 */
app.use(function(req, res, next) {
  var token = req.csrfToken();
  res.cookie('XSRF-TOKEN', token);
  res.locals.csrfToken = token;
  next();
});

/**
 * Sets up the view engine, view's directory path, and the server port.
 */
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.set("port", process.env.PORT || 8080);

/**
 * Description: Redirects users to the 'index' page.
 * Type: HttpGet
 * Request: n/a
 * Response: index.ejs, Employee
 * URL: localhost:8080
 */
app.get("/", function(req, res) {
  Employee.find({}, function(err, employee) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employee);
      res.render("index", {
        title: "Employee-Records",
        employee: employee
      })
    }
  });
});

/**
 * Description: Redirects users to the 'new' page.
 * Type: HttpGet
 * Request: n/a
 * Response: new.ejs
 * URL: localhost:8080/new
 */
app.get("/new", function(req, res) {
  res.render("new", {
    title: "Add Employee"
  });
});

/**
 * Description: Processes a form submission.
 * Type: HttpPost
 * Request: textName
 * Response: index.ejs
 * URL: localhost:8080/process
 */
app.post('/process', function(req, res) {
  // console.log(request.body.txtName);

  if (!req.body.Name) {
    res.status(400).send('Entries must have a name');
    return;
  };

  // get the request's form data
  const employeeName = req.body.Name;
  console.log(employeeName);

  // create a employee model
  let employee = new Employee({
    name: Name
  });

  // save
  employee.save(function(err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employeeName + ' saved successfully!');
      res.redirect('/');
    }
  });
});

/**
 * Description: Redirects users to the 'list' page.
 * Type: HttpGet
 * Request: list.ejs
 * Response: list.ejs
 * URL: localhost:8080/list
 */
app.get("/list", function(req, res) {
  Employee.find({}, function(err, employee) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log(employee);

      if (employee.length > 0) {
        res.render("list", {
          title: "Employee-Records",
          employee: employee
        })
      } else {
        res.redirect("/");
      }
    }
  })
});

/**
 * Creates a new Node.js server and listens on port 8080.
 */
http.createServer(app).listen(app.get("port"), function() {
  console.log("Application started on port " + app.get("port"));
});
