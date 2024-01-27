const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const DB=process.env.DATABASE;

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB);
    console.log('Connection successful');
  } catch (error) {
    console.error(`Connection failed: ${error.message}`);
  }
};

// Call the async function
connectToDatabase();
