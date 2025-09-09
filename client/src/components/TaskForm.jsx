import { motion } from "framer-motion";
import { useState } from "react";

const TaskForm = ({ onTaskAdded }) => {
  const [text, setText] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!text.trim()) { return };

    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
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
        />
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Add Task
        </motion.button>
      </motion.form>
    </motion.div>
  );
};

export default TaskForm;
