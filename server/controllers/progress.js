import Progress from "../models/Progress.js";
import Habit from "../models/Habit.js";

//Get progress summary
const getProgressSummary = async (req, res) => {
  try {
    const progress = await Progress.find({ userId: req.user.id }).sort({ date: -1 });

    return res.status(200).json({
      message: "Progress summary fetched",
      data: progress,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

//Logs a progress entry for a specific habit
const logHabitProgress = async (req, res) => {
  const { date, timeSpent, note } = req.body;
  const { id: habitId } = req.params;

  if (!date || !timeSpent) {
    return res.status(400).json({ message: "Date and time spent are required", success: false });
  }

  try {
    const habit = await Habit.findOne({ _id: habitId, userId: req.user.id });
    if (!habit) {
      return res.status(404).json({ message: "Habit not found", success: false });
    }

    const progress = new Progress({
      userId: req.user.id,
      habitId,
      date,
      timeSpent,
      note,
    });

    const saved = await progress.save();

    return res.status(201).json({
      message: "Habit progress logged",
      data: saved,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

export { getProgressSummary, logHabitProgress };
