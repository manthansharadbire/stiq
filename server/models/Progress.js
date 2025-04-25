import {Schema, model} from 'mongoose';

const progressSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  stats: {
    totalHabitsCompleted: { type: Number, default: 0 },
    totalTimeTracked: { type: Number, default: 0 },
    longestStreak: { type: Number, default: 0 },
  },
});

const Progress = model("Progress", progressSchema)

export default Progress;

