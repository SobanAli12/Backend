const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const adminUserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});

// Validate password
adminUserSchema.methods.validatePassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

// Generate access token
adminUserSchema.methods.generateAccessToken = function () {
  const tokenPayload = { userId: this._id, username: this.username };
  return jwt.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const AdminUser = mongoose.model('AdminUser', adminUserSchema);

module.exports = AdminUser;
