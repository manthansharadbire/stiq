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
