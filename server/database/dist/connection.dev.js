"use strict";

var mongoose = require("mongoose");

var DB = process.env.DATABASE;

var databaseConnection = function databaseConnection() {
  var connect;
  return regeneratorRuntime.async(function databaseConnection$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(DB));

        case 3:
          connect = _context.sent;

          if (connect) {
            console.log("Connection Successfull");
          }

          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          console.log("".concat(_context.t0, "Connection failed"));

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};