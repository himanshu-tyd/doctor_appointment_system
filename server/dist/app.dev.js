"use strict";

var mongoose = require("mongoose");

var express = require("express");

var dotenv = require("dotenv");

var app = express(); // Creating an instance of Express

dotenv.config({
  path: "./config.env"
}); // Configuring environment variables

require("./database/connection"); // Connecting to the database


var PORT = process.env.PORT; // Setting up the port

var User = require("./models/user-schema"); // Importing the User model
// Middleware


var middleware = function middleware(req, res, next) {
  console.log("Hello middleware");
  next();
};

app.use(express.json()); // Parsing JSON in request body

app.use(require("./routes/auth")); // Using the routes defined in the "auth" file
// Example route using middleware

app.get("/contact", middleware, function (req, res) {
  res.send("This is the contact page");
}); // Starting the server

app.listen(PORT, function () {
  console.log("Server is running at port", PORT);
});