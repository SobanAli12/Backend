const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const productController = require('../controllers/ProductController');

router.get('/admin/products', authMiddleware, productController.getAllProducts);
router.get('/admin/products/:id', authMiddleware, productController.getProductById);
router.post('/admin/products', authMiddleware, productController.createProduct);
router.put('/admin/products/:id', authMiddleware, productController.updateProduct);
router.delete('/admin/products/:id', authMiddleware, productController.deleteProduct);

module.exports = router;
