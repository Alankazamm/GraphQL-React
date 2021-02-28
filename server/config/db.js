const mongoose = require('mongoose');

connectDB = async () => {
  const MONGO_URL =
    'mongodb+srv://hayderjabur:hayderjebur@cluster0.vgowt.mongodb.net/graphql?retryWrites=true&w=majority';
  try {
    const conn = await mongoose.connect(MONGO_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);

    process.exit(1);
  }
};
module.exports = connectDB;
