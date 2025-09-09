import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then(response => response.json())
      .then(data => setTasks(data))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

  const handleTaskAdded = (newTask) => {
    setTasks((tasks) => [...tasks, newTask]);
  };
  return (
   <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
   >
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className= "app-header mt-3 ms-3 fw-bold fs-2 text-danger fs-1"
    >
      Task Manager
    </motion.h1>
    <TaskForm onTaskAdded= {handleTaskAdded} />
    <TaskList tasks={tasks} />
  </motion.div>
  )
}

export default App;