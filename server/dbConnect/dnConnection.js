const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const dbConnect = async () => {
   try {
      await mongoose.connect(process.env.DB_URL);
      console.log("connected database");
   } catch (err) {
      console.log("ërror in connecting the database");
   }
};

module.exports = dbConnect;
