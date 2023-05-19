const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.get('/admin/users', userController.getAllUsers);
router.get('/admin/users/:id', userController.getUserById);
router.post('/admin/users', userController.createUser);
router.put('/admin/users/:id', userController.updateUser);
router.delete('/admin/users/:id', userController.deleteUser);

module.exports = router;
