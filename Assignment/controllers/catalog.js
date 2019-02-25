var express = require('express');
var item = require('../models/item.js');
var db = require('../util/itemDB.js');
var router = express.Router();

var re = new RegExp('1-6');

router.get('/', function(req, res){
  var addr;
  var id = req.query.id;
  if(id == null){
    var array = db.getItems();
    res.render('categories', {array: array});
    return;
  }
  var reqItem = db.getItem(id);
  res.render('item', reqItem);
});

module.exports = router;
