const mongoose = require('mongoose');
require('dotenv').config();
const URL =  process.env.MONGO_URL;
connectDB = async () => {
  try {
    const conn = await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
     
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);

    process.exit(1);
  }
};
module.exports = connectDB;
