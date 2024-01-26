const mongoose = require("mongoose");

const DB = process.env.DATABASE;
const databaseConnection = async () => {
  try {
    const connect = await mongoose.connect(DB);
    if (connect) {
      console.log(`Connection Successfull`);
    }
  } catch (error) {
    console.log(`${error}Connection failed`);
  }
};
