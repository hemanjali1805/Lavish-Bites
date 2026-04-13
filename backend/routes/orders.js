const express = require('express');
const Order = require('../models/Order');
const Cart = require('../models/Cart');
const auth = require('../middleware/auth');

const router = express.Router();

// Place order
router.post('/', auth, async (req, res) => {
  const { address, paymentMethod } = req.body;
  try {
    const cart = await Cart.findOne({ userId: req.user.id }).populate('items.productId');
    if (!cart || cart.items.length === 0) return res.status(400).json({ message: 'Cart is empty' });

    let totalPrice = 0;
    const items = cart.items.map(item => {
      totalPrice += item.productId.price * item.quantity;
      return { productId: item.productId._id, quantity: item.quantity };
    });

    const order = new Order({
      userId: req.user.id,
      items,
      totalPrice,
      address,
      paymentMethod,
    });

    await order.save();
    await Cart.findOneAndDelete({ userId: req.user.id }); // Clear cart
    res.json({ message: 'Order placed successfully', order });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user orders
router.get('/', auth, async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.id }).populate('items.productId');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;