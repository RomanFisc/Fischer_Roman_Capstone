const Task = require('../models/task');

exports.getTasks = async (req, res) => {
  const tasks = await Task.find().populate('category').populate('tags');
  res.json(tasks);
};

exports.createTask = async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.json(task);
};

exports.deleteTask = async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: 'Task deleted' });
};