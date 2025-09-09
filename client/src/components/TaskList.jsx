import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.log("Error fetching data: ", error));
  }, []);

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
        className= "list-header mt-3 ms-3 fw-bold text-danger fs-2"
      >
        Task List
      </motion.h1>

      <motion.ul
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className= "list-group list-group-flush mt-3 ms-5 text-success fs-4 fw-semibold"
      >
        {tasks.map((task) => (
          <motion.li
            key={task.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {task.text}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default TaskList;
