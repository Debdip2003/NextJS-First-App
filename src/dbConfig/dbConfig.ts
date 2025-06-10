import mongoose from "mongoose";

export async function connectToDatabase() {
  try {
    mongoose.connect(process.env.MONGODB_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Connected to MongoDB successfully");
    });
    connection.on("error", (err) => {
      console.error("MongoDB connection error:", err);
      process.exit(1);
    });
    connection.on("disconnected", () => {
      console.log("Disconnected from MongoDB");
    });
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to the database");
  }
}
