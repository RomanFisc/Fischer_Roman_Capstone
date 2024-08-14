const Tag = require('../models/tag');

exports.getTags = async (req, res) => {
  const tags = await Tag.find();
  res.json(tags);
};

exports.createTag = async (req, res) => {
  const tag = new Tag(req.body);
  await tag.save();
  res.json(tag);
};

exports.deleteTag = async (req, res) => {
  await Tag.findByIdAndDelete(req.params.id);
  res.json({ message: 'Tag deleted' });
};