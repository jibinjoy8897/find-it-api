import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(
      process.env.MONGO_URI ||
        "mongodb+srv://jibinjoy8897:4goP8raHbJfMm1x5@findit.fnrix.mongodb.net/"
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error connection to mongoDB: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
