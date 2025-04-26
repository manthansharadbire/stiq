import { useEffect, useState } from "react";
import axios from "axios";
import HabitModal from "../components/HabitModal";
import HabitCard from "../components/HabitCard";

const Habits = () => {
  const [habits, setHabits] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const token = localStorage.getItem("token");

  const fetchHabits = async () => {
    try {
      const response = await axios.get("http://localhost:5002/habit", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setHabits(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSaveHabit = async (habit) => {
    try {
      await axios.post("http://localhost:5002/habit", habit, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchHabits();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateHabit = async (habit) => {
    try {
      await axios.put(`http://localhost:5002/habit/${habit._id}`, habit, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchHabits();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteHabit = async (id) => {
    try {
      await axios.delete(`http://localhost:5002/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchHabits();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold">Habits</h1>
        <button
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
          onClick={() => setModalOpen(true)}
        >
          + Add Habit
        </button>
      </div>

      <HabitModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSaveHabit} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habits.map((habit) => (
          <HabitCard
            key={habit._id}
            habit={habit}
            onUpdate={handleUpdateHabit}
            onDelete={handleDeleteHabit}
          />
        ))}
      </div>
    </div>
  );
};

export default Habits;
