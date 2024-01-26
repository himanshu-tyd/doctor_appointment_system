"use strict";

var mongoose = require("mongoose");

var bcrypt = require("bcryptjs");

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
}); //Here we are Hashing password

userSchema.pre("save", function _callee(next) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!this.isModified("password")) {
            _context.next = 7;
            break;
          }

          _context.next = 3;
          return regeneratorRuntime.awrap(bcrypt.hash(this.password, 12));

        case 3:
          this.password = _context.sent;
          _context.next = 6;
          return regeneratorRuntime.awrap(bcrypt.hash(this.cpassword, 12));

        case 6:
          this.cpassword = _context.sent;

        case 7:
          next();

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, null, this);
});
var User = mongoose.model("USERS", userSchema);
module.exports = User;