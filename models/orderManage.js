
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  productIds: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }],
  totalPrice: { type: Number, required: true },
  status: { type: String, required: true },
  // ... (additional fields as per your requirements)
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
