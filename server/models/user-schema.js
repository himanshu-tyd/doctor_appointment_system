const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt=require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    require: true,
    type: String,
  },
  email: {
    require: true,
    type: String,
  },
  phone: {
    require: true,
    type: Number,
  },
  work: {
    require: true,
    type: String,
  },
  password: {
    require: true,
    type: String,
  },
  cpassword: {
    require: true,
    type: String,
  },
  tokens: [
    {
      token: {
        require: true,
        type: String,
      },
    },
  ],
});

//Here we are Hashing password

userSchema.pre("save", async function (next) {
  // console.log(`Hi from inside`)
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }
  next();
});

//Here we are generating TOKEN

userSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const User = mongoose.model("USERS", userSchema);
module.exports = User;
