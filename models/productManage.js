const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const Product = require('../models/Product');

// GET /admin/products
router.get('/admin/products', authMiddleware, async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// GET /admin/products/:id
router.get('/admin/products/:id', authMiddleware, async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// POST /admin/products
router.post('/admin/products', authMiddleware, async (req, res) => {
  const { name, description, price, category } = req.body;

  try {
    const newProduct = new Product({ name, description, price, category });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// PUT /admin/products/:id
router.put('/admin/products/:id', authMiddleware, async (req, res) => {
  const productId = req.params.id;
  const { name, description, price, category } = req.body;

  try {
    const product = await Product.findByIdAndUpdate(
      productId,
      { name, description, price, category },
      { new: true }
    );
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

// DELETE /admin/products/:id
router.delete('/admin/products/:id', authMiddleware, async (req, res) => {
  const productId = req.params.id;

  try {
    const product = await Product.findByIdAndDelete(productId);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.sendStatus(204);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'An error occurred' });
  }
});

module.exports = router;
