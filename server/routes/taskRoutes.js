const express = require('express');
const router = express.Router();
const { getTasks, createTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/auth');

router.get('/', auth, getTasks);
router.post('/', auth, createTask);
router.delete('/:id', auth, deleteTask);

module.exports = router;