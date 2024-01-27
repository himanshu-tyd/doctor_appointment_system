"use strict";

var express = require("express");

var router = express.Router();

var bycrpt = require("bcryptjs");

var jwt = require("jsonwebtoken");

require("../database/connection");

var User = require("../models/user-schema");

router.get("/", function (req, res) {
  res.send("Hello from router js");
});
/* Using Async await */

router.post("/signup", function _callee(req, res) {
  var _req$body, name, email, work, password, cpassword, userExits, user, userSave;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, email = _req$body.email, work = _req$body.work, password = _req$body.password, cpassword = _req$body.cpassword;

          if (!name || !email || !work || !password || !cpassword) {
            res.status(422).json({
              error: "please enter all details"
            });
          }

          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 5:
          userExits = _context.sent;

          if (userExits) {
            res.json({
              error: "Email already Exits"
            });
          } else if (password != cpassword) {
            res.status(422).json({
              error: "password does not match"
            });
          }

          user = new User({
            name: name,
            email: email,
            work: work,
            password: password,
            cpassword: cpassword
          }); //here we call password dicription method to hash the password

          _context.next = 10;
          return regeneratorRuntime.awrap(user.save());

        case 10:
          userSave = _context.sent;

          if (userSave) {
            res.status(201).json({
              message: "Data save succesfully"
            });
          } else {
            res.status(500).json({
              messsage: "failed"
            });
          }

          _context.next = 17;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);

        case 17:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 14]]);
}); // login routes

router.post("/signin", function _callee2(req, res) {
  var _req$body2, email, password, userLogin, isMatch, token;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, email = _req$body2.email, password = _req$body2.password;
          _context2.prev = 1;

          if (!(!email || !password)) {
            _context2.next = 4;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            message: "Pls fill the blanks"
          }));

        case 4:
          _context2.next = 6;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 6:
          userLogin = _context2.sent;
          _context2.next = 9;
          return regeneratorRuntime.awrap(bycrpt.compare(password, userLogin.password));

        case 9:
          isMatch = _context2.sent;

          if (!(userLogin && isMatch)) {
            _context2.next = 19;
            break;
          }

          _context2.next = 13;
          return regeneratorRuntime.awrap(userLogin.generateAuthToken());

        case 13:
          token = _context2.sent;
          console.log(token);
          res.cookie("jwtoken", token, {
            expires: new Date(Date.now() + 25892000000),
            httpOnly: true
          });
          res.status(200).json({
            message: "Login Successfully"
          });
          _context2.next = 20;
          break;

        case 19:
          res.status(400).json({
            error: "User Email and Password does not match"
          });

        case 20:
          _context2.next = 25;
          break;

        case 22:
          _context2.prev = 22;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 22]]);
});
module.exports = router;