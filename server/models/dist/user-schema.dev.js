"use strict";

var mongoose = require("mongoose");

var bcrypt = require("bcryptjs");

var jwt = require('jsonwebtoken');

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
  },
  tokens: [{
    token: {
      require: true,
      type: String
    }
  }]
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
}); //Here we are generating TOKEN

userSchema.methods.generateAuthToken = function _callee2() {
  var token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          token = jwt.sign({
            _id: this._id
          }, process.env.SECRET_KEY);
          this.tokens = this.tokens.concat({
            token: token
          });
          _context2.next = 5;
          return regeneratorRuntime.awrap(this.save());

        case 5:
          return _context2.abrupt("return", token);

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, this, [[0, 8]]);
};

var User = mongoose.model("USERS", userSchema);
module.exports = User;