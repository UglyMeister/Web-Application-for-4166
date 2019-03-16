var db = require('../util/itemDB.js');

var item;
var rating;
var madeIt;

function newUserItem(item, rating, madeIt){
  item = item;
  rating = rating;
  madeIt = madeIt;
}

module.exports = {item, rating, madeIt, newUserItem};
