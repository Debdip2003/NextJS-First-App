import mongoose from "mongoose";

const MONGOOSE_URL = process.env.MONGODB_URL;

if (!MONGOOSE_URL) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let isConnected = false;
export const dbConnect = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(MONGOOSE_URL);
    isConnected = db.connections[0].readyState;
    console.log("MongoDB connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
