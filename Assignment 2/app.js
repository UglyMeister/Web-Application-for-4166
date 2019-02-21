var express = require('express');
var app = express();
var router = express.Router();
app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.use('*', function(req, res){
  res.render('contact', {});
});

app.listen(8080);
