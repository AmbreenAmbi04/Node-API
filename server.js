const express = require("express");
const app = express();
const PORT = 5000;

app.use((request, response, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (request.method === "OPTIONS") {
    return response.sendStatus(200);
  }

  next();
});

app.use(express.json());

let tasks = [
  { id: 1, text: "Initialize an express server" },
  { id: 2, text: "Knead the dough" },
  { id: 3, text: "Complete the tasks" },
  { id: 4, text: "Fry the donuts" },
];

app.get("/tasks", (request, response) => {
  console.log("✅ /tasks was called");
  res.json(tasks);
});

app.post("/tasks", (request, response) => {
  const { text } = request.body;
  if (!text) {
    return response.status(400).json({ error: "Text is required" });
  }
  const newTask = { id: tasks.length + 1, text };
  tasks.push(newTask);
  response.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
