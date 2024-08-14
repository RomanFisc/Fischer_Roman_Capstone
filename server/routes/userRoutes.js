const express = require('express');
const router = express.Router();

// Example route: Get all users
router.get('/', (req, res) => {
  res.send('Get all users');
});

// Example route: Create a new user
router.post('/', (req, res) => {
  res.send('Create a new user');
});

// Other user-related routes...

module.exports = router;