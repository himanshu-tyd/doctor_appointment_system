"use strict";

var express = require('express');

var router = express.Router();

require('../database/connection');

var User = require('../models/user-schema');

router.get('/', function (req, res) {
  res.send('Hello from router js');
});
/* Using Async await */

router.post('/signup', function _callee(req, res) {
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
          } else if (password != cpassword) {
            res.status(422).json({
              error: "password does not match"
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
          }

          user = new User({
            name: name,
            email: email,
            work: work,
            password: password,
            cpassword: cpassword
          });
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
});
module.exports = router;