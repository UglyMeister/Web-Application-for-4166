var express = require('express');
var items = require('./models/itemDB.js');
var app = express();
var router = express.Router();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use('/test', function(req, res){
  console.log(items.getItem(4));
  res.render('feedback', {});
});
app.use('/', function(req, res){
  res.render('index', {});
});


app.listen(8080);
