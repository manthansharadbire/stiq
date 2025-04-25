import Habit from "../models/Habit.js";

//to create a habit
const postHabit = async (req, res) => {
  const { name, category, goalType, frequency, icon, status, logs } = req.body;

  try {
    const habit = new Habit({
      userId: req.user.id, 
      name,
      category,
      goalType,
      frequency,
      icon,
      status,
      logs,
    });

    const savedHabit = await habit.save();

    return res.status(201).json({
      message: "Habit created successfully",
      data: savedHabit,
      success: true,
    });
  } catch (err) {
    return res.status(400).json({
      message: err.message,
      success: false,
    });
  }
};

//To get all habits
const getHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ userId: req.user.id });

    return res.status(200).json({
      message: "Habits fetched successfully",
      data: habits,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

//To update a habit
const updateHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndUpdate(
      { _id: req.params.id, userId: req.user.id },
      req.body,
      { new: true }
    );

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Habit updated successfully",
      data: habit,
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

//To delete a habit
const deleteHabit = async (req, res) => {
  try {
    const habit = await Habit.findOneAndDelete({
      _id: req.params.id,
      userId: req.user.id,
    });

    if (!habit) {
      return res.status(404).json({
        message: "Habit not found",
        success: false,
      });
    }

    return res.status(200).json({
      message: "Habit deleted successfully",
      success: true,
    });
  } catch (err) {
    return res.status(500).json({
      message: err.message,
      success: false,
    });
  }
};

export { postHabit, getHabits, updateHabit, deleteHabit };
