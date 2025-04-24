const displaySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  preferences: {
    darkMode: { type: Boolean, default: false },
  },
});
