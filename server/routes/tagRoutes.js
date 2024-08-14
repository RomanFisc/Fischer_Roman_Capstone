const express = require('express');
const router = express.Router();
const { getTags, createTag, deleteTag } = require('../controllers/tagController');
const auth = require('../middleware/auth');

router.get('/', auth, getTags);
router.post('/', auth, createTag);
router.delete('/:id', auth, deleteTag);

module.exports = router;