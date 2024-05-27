import mongoose from "mongoose";

async = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

module.exports = {
  connectedToDb,
};
