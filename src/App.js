import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { useState } from "react";

import "./styles.css";

export default function App() {
  // contain all my task

  // Stateful -> hook
  const [tasks, setTasks] = useState([]);

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  // delete Task from list
  const deleteTask = (id) => {
    console.log(`deleted ${id}`);
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // add task to the list
  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="container">
      <Header addTask={addTask} />

      {tasks.length > 0 ? (
        <Body
          tasks={tasks}
          deleteTask={deleteTask}
          toggleReminder={toggleReminder}
        />
      ) : (
        <small>
          <i>No tasks added yet</i>
        </small>
      )}

      <Footer />
    </div>
  );
}