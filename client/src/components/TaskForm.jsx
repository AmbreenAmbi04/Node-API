import { motion } from "framer-motion";
import { useState } from "react";

const TaskForm = ({ onTaskAdded }) => {
  const [text, setText] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.trim()) { 
        setError("Warning! Please enter a task.");
        return };

    try {
      const response = await fetch("http://localhost:5000/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
      });

      if (!response.ok) {
        throw new Error("Failed to add task");
      }

      const newTask = await response.json();
      onTaskAdded(newTask);
      setText("");
      setError("");
    } catch (error) {
      console.error("Error adding task:", error);
    }
  };

  return (
    <motion.div>
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.input
          type="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter a new task"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className= "form-control w-50 ms-3"
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className= "btn btn-success mt-3 ms-3"
        >
          Add Task
        </motion.button>
      </motion.form>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className= "ms-3"
      >
        {error && (
            <motion.h3
            className="text-danger mt-2 ms-3"
            >{error}</motion.h3>
        )}
      </motion.div>
    </motion.div>
  );
};

export default TaskForm;
