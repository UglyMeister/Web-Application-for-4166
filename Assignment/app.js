var express = require('express');
var items = require('./util/itemDB.js');
var app = express();
var router = express.Router();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use('/test', function(req, res){
  console.log(items.getItem(4));
  res.render('item', {});
});
app.use('/', function(req, res){
  res.render('index', {});
});


app.listen(8080);
