const express = require('express');
const Product = require('../models/Product');

const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get products by category
router.get('/:category', async (req, res) => {
  try {
    const products = await Product.find({ category: { $regex: new RegExp(req.params.category, 'i') } });
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;