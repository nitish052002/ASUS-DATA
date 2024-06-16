const mongoose = require("mongoose");
const { DB_NAME } = require("../constant.js");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log(`DB Connected succesfully  :)`);
  } catch (error) {
    console.log("MONGO DB Connection problem :(");
    process.exit();
  }
};

module.exports = connectDB;
