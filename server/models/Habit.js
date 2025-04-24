import { Schema, model } from "mongoose";

const habitSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    goalType: {
      type: String,
      enum: ["daily", "weekly", "monthly", "yearly", "once"],
      required: true,
    },
    frequency: {
      type: Number,
      default: 1,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    streak: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      enum: ["in-progress", "completed"],
      default: "in-progress",
    },
    logs: [
      {
        date: Date,
        completed: Boolean,
        timeSpent: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Habit = model("Habit", habitSchema);
export default Habit;
