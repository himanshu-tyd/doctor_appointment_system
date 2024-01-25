"use strict";

var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String
  },
  email: {
    require: true,
    type: String
  },
  phone: {
    require: true,
    type: Number
  },
  work: {
    require: true,
    type: String
  },
  password: {
    require: true,
    type: String
  },
  cpassword: {
    require: true,
    type: String
  }
});
var User = mongoose.model('USERS', userSchema);
module.exports = User;