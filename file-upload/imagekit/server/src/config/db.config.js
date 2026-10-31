import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb is connected");
  } catch (error) {
    console.log("error while connecting mongodb", error);
  }
};

export default connectDB;
