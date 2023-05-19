const Order = require('../models/Order');

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.getOrderById = async (req, res) => {
  const orderId = req.params.id;

  try {
    const order = await Order.findById(orderId);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.createOrder = async (req, res) => {
  const { customerName, productIds, totalPrice, status } = req.body;

  try {
    const newOrder = new Order({ customerName, productIds, totalPrice, status });
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.updateOrder = async (req, res) => {
  const orderId = req.params.id;
  const { customerName, productIds, totalPrice, status } = req.body;

  try {
    const order = await Order.findByIdAndUpdate(
      orderId,
      { customerName, productIds, totalPrice, status },
      { new: true }
    );
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
};

exports.deleteOrder = async (req, res) =>{
    const orderId = req.params.id;
    
    try {
    const order = await Order.findByIdAndDelete(orderId);
    if (!order) {
    return res.status(404).json({ message: 'Order not found' });
    }
    res.sendStatus(204);
    } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
    }
    };
