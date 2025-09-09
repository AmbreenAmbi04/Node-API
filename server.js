const express = require("express");
const app = express();
const PORT = 5000;

app.use(express.json());

let tasks = [
    { id: 1, text: "Initialize an express server" },
    { id: 2, text: "Knead the dough" },
    { id: 3, text: "Complete the tasks" },
    { id: 4, text: "Fry the donuts" },
]