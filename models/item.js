var mongoose = require('mongoose');

var itemSchema = new mongoose.Schema({
  thingToDo: { type: String, required: true },
  createdAt: Date,
  updatedAt: Date
});

var Item = mongoose.model('Item', itemSchema);

// Make this available to our other files
module.exports = Item;
