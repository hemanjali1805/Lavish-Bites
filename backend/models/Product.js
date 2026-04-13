const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  type: { type: String, required: true }, // veg or non-veg
  price: { type: Number, required: true },
  image: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);