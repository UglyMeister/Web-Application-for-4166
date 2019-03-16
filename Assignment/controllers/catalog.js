var express = require('express');
var db = require('../util/itemDB.js');
var router = express.Router();

var re = new RegExp('1-6');

router.get('/', function(req, res){
  var id = req.query.id;
  if(id == null || id <= 0 || id >= 7){
    var array = db.getItems();
    res.render('categories', {array: array});
    return;
  }
  var reqItem = db.getItem(id);
  res.render('item', {reqItem: reqItem});
});

module.exports = router;
