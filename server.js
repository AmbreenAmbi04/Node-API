const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

let tasks = [
    { id: 1, text: "Initialize an express server" },
    { id: 2, text: "Knead the dough" },
    { id: 3, text: "Complete the tasks" },
    { id: 4, text: "Fry the donuts" },
];

app.get("/api/tasks", (request, response) => {
    response.json(tasks);
});

app.post("/api/tasks", (request, response) => {
    const { text } = request.body;
    if ( !text ) {
        return response.status(400).json({ error: "Text is required" });
    }

const newTask = {
    id: tasks.length + 1,
    text
};

tasks.push(newTask);
response.status(201).json(newTask);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})