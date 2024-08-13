const express = require('express');
const Task = require('../models/Task');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Create Task
router.post('/', authMiddleware, async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description, user: req.userId });
  await task.save();
  res.status(201).json(task);
});

// Get Tasks
router.get('/', authMiddleware, async (req, res) => {
  const tasks = await Task.find({ user: req.userId });
  res.json(tasks);
});

// Update Task
router.put('/:id', authMiddleware, async (req, res) => {
  const { title, description, completed } = req.body;
  const task = await Task.findByIdAndUpdate(req.params.id, { title, description, completed }, { new: true });
  res.json(task);
});

// Delete Task
router.delete('/:id', authMiddleware, async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.status(204).end();
});

module.exports = router;