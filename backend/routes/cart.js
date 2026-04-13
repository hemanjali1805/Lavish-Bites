const express = require('express');
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');

const router = express.Router();

// Get cart
router.get('/', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    if (!cart) cart = new Cart({ userId: req.user.id, items: [] });
    res.json(cart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Add to cart
router.post('/add', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) cart = new Cart({ userId: req.user.id, items: [] });

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      cart.items[itemIndex].quantity += quantity;
    } else {
      cart.items.push({ productId, quantity });
    }

    await cart.save();
    const populatedCart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Update cart item
router.put('/update', auth, async (req, res) => {
  const { productId, quantity } = req.body;
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
    if (itemIndex > -1) {
      if (quantity > 0) {
        cart.items[itemIndex].quantity = quantity;
      } else {
        cart.items.splice(itemIndex, 1);
      }
    }

    await cart.save();
    const populatedCart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Remove from cart
router.delete('/remove/:productId', auth, async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.user.id });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item.productId.toString() !== req.params.productId);
    await cart.save();
    const populatedCart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    res.json(populatedCart);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;