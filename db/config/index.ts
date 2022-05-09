import mongoose from "mongoose";

const MongoDB = process.env.MONGODB_URI ?? "mongodb+srv://";

const connectDb = async () => {
  try {
    await mongoose.connect(MongoDB);

    console.log("DB CONNECTED!");
  } catch (error) {
    console.log("DB CONNECTING ERROR", error);
    process.exit(1);
  }
};

export default connectDb;
