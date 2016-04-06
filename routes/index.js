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
  var question = req.body.question;

  var newItem = Item({
      question: question
  });

  // Save the card
  newItem.save(function(err) {
      if (err) console.log(err);

      res.send('Item created!');
  });
});

module.exports = router;
