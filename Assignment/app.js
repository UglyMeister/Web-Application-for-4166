var express = require('express');
//var items = require('./util/itemDB.js');
var catalog = require('./controllers/catalog.js');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use('/test', catalog);
app.use('/', function(req, res){
  res.render('index', {});
});



app.listen(8080);
