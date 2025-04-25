import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import authenticate from './middlewares/authenticate.js';
import { postSignup, postLogin } from "./controllers/user.js";
import {postHabit,getHabits,updateHabit,deleteHabit,} from "./controllers/habit.js";
import {getProgressSummary,logHabitProgress,} from "./controllers/progress.js";

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
const conn = await mongoose.connect(process.env.MONGO_URI);

  if (conn) {
    console.log("MongoDB connected Successfully!");
  } else {
    console.log("MongoDB connection failed!");
  }
};

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is Healthy!" });
});

//login
app.post("/login", postLogin);
//signup
app.post("/signup",postSignup);

//to create a new habit
app.post("/habit",authenticate, postHabit);

//to get all the habits
app.get("/habit",authenticate, getHabits);

//to update a habit
app.put("/habit/:id",authenticate, updateHabit);

//to delete an habit
app.delete("/delete/:id",authenticate, deleteHabit);

//To track progress
app.get("/progress",authenticate, getProgressSummary);

//To log a progress entry for a specific habit
app.post("/habits/:id/log",authenticate, logHabitProgress);


const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  connectDB();
});
