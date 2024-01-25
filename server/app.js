const mongoose = require("mongoose");
const express = require("express");
const dotenv = require("dotenv");


const app = express();   // Creating an instance of Express


dotenv.config({ path: "./config.env" }); // Configuring environment variables
require("./database/connection");  // Connecting to the database

const PORT = process.env.PORT;  // Setting up the port


const User = require("./models/user-schema");       // Importing the User model

// Middleware
const middleware = (req, res, next) => {
  console.log(`Hello middleware`);
  next();
};  


app.use(express.json());    // Parsing JSON in request body
app.use(require("./routes/auth"));      // Using the routes defined in the "auth" file

// Example route using middleware
app.get("/contact", middleware, (req, res) => {
  res.send(`This is the contact page`);
});


// Starting the server
app.listen(PORT, () => {
  console.log(`Server is running at port`, PORT);
});
