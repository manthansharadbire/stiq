import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HabitModal = ({ isOpen, onClose, onSave }) => {
  const [habit, setHabit] = useState({
    name: "",
    category: "",
    goalType: "daily",
    frequency: 1,
    createdAt: new Date(),
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(habit);
    setHabit({ name: "", category: "", goalType: "daily", frequency: 1, createdAt: new Date() });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-4">Add New Habit</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Habit Name"
            className="border p-2 w-full rounded"
            value={habit.name}
            onChange={(e) => setHabit({ ...habit, name: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Category"
            className="border p-2 w-full rounded"
            value={habit.category}
            onChange={(e) => setHabit({ ...habit, category: e.target.value })}
            required
          />
          <select
            className="border p-2 w-full rounded"
            value={habit.goalType}
            onChange={(e) => setHabit({ ...habit, goalType: e.target.value })}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="once">Once</option>
          </select>
          <input
            type="number"
            placeholder="Frequency"
            className="border p-2 w-full rounded"
            value={habit.frequency}
            onChange={(e) => setHabit({ ...habit, frequency: e.target.value })}
            required
          />
          <DatePicker
            selected={habit.createdAt}
            onChange={(date) => setHabit({ ...habit, createdAt: date })}
            className="border p-2 w-full rounded"
          />

          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
            >
              Save Habit
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 w-full"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HabitModal;
