import express from "express";

const app = express();
app.use(express.json());

let tasks = [];

// Create a task
app.post("/tasks", (req, res) => {
  let task = req.body;
  tasks.push(task);
  res.send("Task added");
});

// Read all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// Update a task
app.put("/tasks/:id", (req, res) => {
  let id = parseInt(req.params.id);
  tasks[id] = req.body;
  res.send("Task updated");
});

// Delete a task
app.delete("/tasks/:id", (req, res) => {
  let id = parseInt(req.params.id);
  tasks.splice(id, 1);
  res.send("Task deleted");
});

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});