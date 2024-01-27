"use strict";

var mongoose = require('mongoose');

require('dotenv').config(); // Load environment variables


var DB = process.env.DATABASE;

var connectToDatabase = function connectToDatabase() {
  return regeneratorRuntime.async(function connectToDatabase$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(DB));

        case 3:
          console.log('Connection successful');
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.error("Connection failed: ".concat(_context.t0.message));

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
}; // Call the async function


connectToDatabase();