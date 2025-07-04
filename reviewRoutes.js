const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// POST – Add new review
router.post('/', async (req, res) => {
  try {
    const newReview = await Review.create(req.body);
    res.json(newReview);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// GET – All reviews
router.get('/', async (req, res) => {
  try {
    const reviews = await Review.find().sort({ date: -1 });
    res.json(reviews);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// DELETE – Remove a review by ID ✅
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Review.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
