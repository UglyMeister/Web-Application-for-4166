var express = require('express');
var session = require('express-session');
//var items = require('./util/itemDB.js');
var catalog = require('./controllers/catalog.js');
var profileController = require('./controllers/profileController2.js');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(session({secret: 'secret', resave: true, saveUninitialized: false}));



app.use('/login', profileController);
app.use('/logout', profileController);

app.use('/catalog', catalog);
app.use('/about', function(req, res){
  res.render('about', {});
});
app.use('/contact', function(req, res){
  res.render('contact', {});
});
app.use('/myItems', profileController);
app.use('/', function(req, res){
  res.render('index', {});
});



app.listen(8080);
