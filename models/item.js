var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  question: { type: String, required: true },
  created_at: Date,
  updated_at: Date
});

var Item = mongoose.model('Item', itemSchema);

// Make this available to our other files
module.exports = Item;
