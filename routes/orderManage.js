const express = require('express');
const router = express.Router();
const orderController = require('../controllers/OrderController');

router.get('/admin/orders', orderController.getAllOrders);
router.get('/admin/orders/:id', orderController.getOrderById);
router.post('/admin/orders', orderController.createOrder);
router.put('/admin/orders/:id', orderController.updateOrder);
router.delete('/admin/orders/:id', orderController.deleteOrder);

module.exports = router;
