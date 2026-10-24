const mongoose = require("mongoose");


const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akshatagrawal2864_db_user:akshat2864@cohort-cluster.ri9qypn.mongodb.net/",
    );
    console.log("mongodb connected");
  } catch (error) {
    console.log("error while connecting db", error);
  }
};

module.exports = connectDb