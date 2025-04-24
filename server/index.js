import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  if (conn) {
    console.log("MongoDB connected Successfully!");
  } else {
    console.log("MongoDB connection failed!");
  }
};

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req, res) => {
  return res.status(200).json({
    message: "Server is healthy!",
  });
});

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  connectDB();
});
