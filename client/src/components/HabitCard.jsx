import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const HabitCard = ({ habit, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedHabit, setEditedHabit] = useState({ ...habit });

  const handleUpdate = (e) => {
    e.preventDefault();
    onUpdate(editedHabit);
    setIsEditing(false);
  };

  return (
    <div className="bg-white shadow-md p-6 rounded-lg">
      {isEditing ? (
        <form onSubmit={handleUpdate} className="space-y-2">
          <input
            className="border p-2 w-full rounded"
            value={editedHabit.name}
            onChange={(e) => setEditedHabit({ ...editedHabit, name: e.target.value })}
          />
          <input
            className="border p-2 w-full rounded"
            value={editedHabit.category}
            onChange={(e) => setEditedHabit({ ...editedHabit, category: e.target.value })}
          />
          <select
            className="border p-2 w-full rounded"
            value={editedHabit.goalType}
            onChange={(e) => setEditedHabit({ ...editedHabit, goalType: e.target.value })}
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="once">Once</option>
          </select>
          <input
            className="border p-2 w-full rounded"
            type="number"
            value={editedHabit.frequency}
            onChange={(e) => setEditedHabit({ ...editedHabit, frequency: e.target.value })}
          />
          <DatePicker
            selected={new Date(editedHabit.createdAt)}
            onChange={(date) => setEditedHabit({ ...editedHabit, createdAt: date })}
            className="border p-2 w-full rounded"
          />
          <div className="flex gap-2">
            <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600" type="submit">
              Save
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600" onClick={() => setIsEditing(false)}>
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <>
          <h2 className="text-xl font-semibold">{habit.name}</h2>
          <p>Category: {habit.category}</p>
          <p>Goal: {habit.goalType}</p>
          <p>Frequency: {habit.frequency}</p>
          <p>Date: {new Date(habit.createdAt).toLocaleDateString()}</p>
          <div className="flex gap-2 mt-4">
            <button
              className="bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-500"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              onClick={() => onDelete(habit._id)}
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default HabitCard;
