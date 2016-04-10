var express = require('express');
var router = express.Router();
var Item = require('../models/item');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { });
});

router.get('/items', function(req, res, next) {
  Item.find({ }, function(err, items) {
    if (err) console.log(err);

    res.json(items);
  });
});

router.post('/items', function(req, res, next) {
  var thingToDo = req.body.thingToDo;

  var newItem = Item({
      thingToDo: thingToDo
  });

  // Save the item
  newItem.save(function(err) {
      if (err) console.log(err);

      res.send('Item created!');
  });
});

router.delete('/items', function(req, res, next) {
  var thingToDelete = req.body.thingToDelete;

  Item.find({}, function(err, item) {
    if (err) console.log(err);

    res.send('Item deleted!');
  })
});

module.exports = router;
