"use strict";

var mongoose = require('mongoose');

var DB = process.env.DATABASE;
mongoose.connect(DB).then(function () {
  console.log("connnection succesfull");
})["catch"](function (e) {
  return console.log("".concat(e, "connection failed"));
});