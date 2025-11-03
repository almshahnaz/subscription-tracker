import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

const EXIT_FAILURE = 1;

if (!DB_URI) {
  throw new Error(
    "Please define the DB_URI environment variable inside .env.local"
  );
}

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log(`Connected to DB in ${NODE_ENV} mode`);
  } catch (error) {
    console.error("Error connecting to database: ", error);
    process.exit(EXIT_FAILURE);
  }
};

export default connectDB;
