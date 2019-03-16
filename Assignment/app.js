var express = require('express');
var session = require('express-session');
//var items = require('./util/itemDB.js');
var catalog = require('./controllers/catalog.js');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use('/catalog', catalog);
app.use('/about', function(req, res){
  res.render('about', {});
});
app.use('/contact', function(req, res){
  res.render('contact', {});
});
app.use('/myItems', function(req, res){
  res.render('myItems', {});
});
app.use('/', function(req, res){
  res.render('index', {});
});



app.listen(8080);
