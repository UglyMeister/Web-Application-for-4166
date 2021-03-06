var express = require('express');
var session = require('express-session');
//var items = require('./util/itemDB.js');
var catalog = require('./controllers/catalog.js');
var profileController = require('./controllers/profileController2.js');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(session({secret: 'secret', resave: true, saveUninitialized: false}));



app.use('/signin', profileController);
app.use('/signout', profileController);

app.use('/catalog', catalog);
app.use('/about', function(req, res){
  res.render('about', {session: req.session});
});
app.use('/contact', function(req, res){
  res.render('contact', {session: req.session});
});
app.use('/feedback', function(req, res){
  res.render('feedback', {session: req.session})
});
app.use('/myItems', profileController);
app.use('/myItems/:action',function(req,res,next){
  console.log(req.params.action);
  console.log(req.query);
  next();
}, profileController);
app.use('/', function(req, res){
  res.render('index', {session: req.session});
});

app.use('/save', profileController);




app.listen(8080);
