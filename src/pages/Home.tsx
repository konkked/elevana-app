import React, { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const Home: React.FC = () => {
  const [dailyHabits, setDailyHabits] = useState([
    { id: 1, name: "Meditation", completed: false },
    { id: 2, name: "Exercise", completed: false },
    { id: 3, name: "Journaling", completed: false },
  ]);

  const toggleHabit = (id: number) => {
    setDailyHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Daily Habits Section */}
      <section className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Daily Habits</h2>
        <div className="space-y-4">
          {dailyHabits.map((habit) => (
            <div
              key={habit.id}
              className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm"
            >
              <span>{habit.name}</span>
              <CheckCircle2
                className={`cursor-pointer ${
                  habit.completed ? "text-emerald-600" : "text-gray-400"
                }`}
                onClick={() => toggleHabit(habit.id)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Daily Objective */}
      <section className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Daily Objective</h2>
        <p className="text-stone-600 dark:text-stone-300">
          Complete project planning for the upcoming week.
        </p>
        <div className="mt-4 flex justify-between text-sm text-stone-500">
          <span>Progress: 60%</span>
          <span>Due: Today</span>
        </div>
      </section>

      {/* Weekly Goal */}
      <section className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
        <h2 className="text-lg font-semibold mb-2">Weekly Goal</h2>
        <p className="text-stone-600 dark:text-stone-300">
          Establish morning routine and maintain it for 7 days.
        </p>
        <div className="mt-4 grid grid-cols-7 gap-1">
          {[...Array(7)].map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded ${
                i < 4 ? "bg-emerald-600" : "bg-stone-200 dark:bg-gray-700"
              }`}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
