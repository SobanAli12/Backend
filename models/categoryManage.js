

const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  // ... (additional fields as per your requirements)
});

const Category = mongoose.model('Category', categorySchema);

module.exports = Category;
