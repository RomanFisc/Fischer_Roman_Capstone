const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const Task = require('../models/Task');

router.use(authenticate);

router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ msg: 'Error fetching tasks' });
  }
});

router.post('/', async (req, res) => {
  try {
    const newTask = new Task(req.body);
    await newTask.save();
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ msg: 'Error adding task' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ msg: 'Error deleting task' });
  }
});

module.exports = router;