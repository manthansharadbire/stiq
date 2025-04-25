import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
import { postSignup, postLogin } from "./controllers/user.js";


//middleware declaration
const middleware = async (req, res, next) => {
  console.log(`Request received at ${req.url}`);
  next();
};

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(middleware);

//MongoDB Connection
const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  if (conn) {
    console.log("MongoDB connected Successfully!");
  } else {
    console.log("MongoDB connection failed!");
  }
};

//health-checkup
app.get("/health", (req, res) => {
  return res.status(200).json({ message: "Server is Healthy!" });
});

//login
app.post("/login", postLogin);

//signup
app.post("/signup", postSignup);

//to create a new habit
app.post("/habit", postHabit);

//to get all the habits
app.get("/habit", getHabit);

//to get a specific habit
app.get("/habit/:id", getSpecificHabit);

//to update a habit
app.put("/habit/:id", updateHabit);

//to delete an habit
app.delete("/delete/:id", deleteHabit);

//PORT
const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
  connectDB();
});
