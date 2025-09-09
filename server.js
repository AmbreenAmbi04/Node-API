const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let tasks = [
    { id: 1, text: "Initialize an express server" },
    { id: 2, text: "Knead the dough" },
    { id: 3, text: "Complete the tasks" },
    { id: 4, text: "Fry the donuts" },
];

app.get("/tasks", (request, response) => {
    response.json(tasks);
});

app.post("/tasks", (request, response) => {
    const { text } = request.body;
    if ( !text ) {
        return response.status(400).json({ error: "Text is required" });
    }
})