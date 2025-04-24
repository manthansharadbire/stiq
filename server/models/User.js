import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      errorMessage: "Name is required",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      errorMessage: "Email is required",
    },
    password: {
      type: String,
      required: true,
    },
    city: {
      type: String,
    },
    gender: {
      type: String,
      required: true,
      errorMessage: "Please select your gender",
    },
    age: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
