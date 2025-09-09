import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TaskList = () => {
    const [ tasks, setTasks ] = useState([]);

    useeffect (() => {
        fetch("http://localhost:5000/api/tasks")
        .then(response => response.json())
        .then(data => setTasks(data))
        .catch((error) => console.log("Error fetching data: ", error));
    }, []);
}

export default TaskList;