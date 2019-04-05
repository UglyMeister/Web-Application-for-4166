
let ItemClass = require('../models/Item');
let appItems = [];
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Assignment', {useNewUrlParser: true});
var db = mongoose.connection;
var itemSchema = new mongoose.Schema({
  itemCode: Number,
  name: String,
  category: String,
  description: String,
  rating: Number,
  image: String
});
itemSchema.loadClass(ItemClass);
var ItemModel = db.model('Item', itemSchema, 'items');
var category1 = [];
var category2 = [];
var testString;
ItemModel.find({}).then(function(doc){
  for(var i = 0; i < doc.length; i++){
    var code = doc[i].itemCode;
    var name = doc[i].name;
    var category = doc[i].category;
    var description = doc[i].description;
    var rating = doc[i].rating;
    var image = doc[i].image;


    appItems[i] = {
      itemCode: code,
      name: name,
      category: category,
      description: description,
      rating: rating,
      image: image
    };
  }
  //console.log(appItems);
  category1 = [appItems[0], appItems[1], appItems[2]];
  category2 = [appItems[3], appItems[4], appItems[5]];
  //console.log('category1\n' + category1);
  //console.log('category2\n' + category2);
});


// let itemObj = new Item();
// itemObj.setItemCode(1);
// itemObj.setItemName("Shaggy");
// itemObj.setDescription("Shaggy description");
// itemObj.setCategory("Modern");
// itemObj.setImageURL("images/shaggy.jpg");
//
// appItems.push(itemObj);
// //console.log(appItems.length);
//
// itemObj = new Item();
// itemObj.setItemCode(2);
// itemObj.setItemName("Emoji");
// itemObj.setDescription("Emoji description");
// itemObj.setCategory("Modern");
// itemObj.setImageURL("images/emoji.jpg");
//
// appItems.push(itemObj);
// console.log(appItems.length);
//
// itemObj = new Item();
// itemObj.setItemCode(3);
// itemObj.setItemName("B");
// itemObj.setDescription("B description");
// itemObj.setCategory("Modern");
// itemObj.setImageURL("images/b.jpg");
//
// appItems.push(itemObj);
//
// itemObj = new Item();
// itemObj.setItemCode(4);
// itemObj.setItemName("Doge");
// itemObj.setDescription("Doge description");
// itemObj.setCategory("Classic");
// itemObj.setImageURL("images/doge.jpg");
//
// appItems.push(itemObj);
//
// itemObj = new Item();
// itemObj.setItemCode(5);
// itemObj.setItemName("Bad Luck Brian");
// itemObj.setDescription("Bad Luck Brian description");
// itemObj.setCategory("Classic");
// itemObj.setImageURL("images/BadLuckBrian.jpg");
//
// appItems.push(itemObj);
//
// itemObj = new Item();
// itemObj.setItemCode(6);
// itemObj.setItemName("Patrick and Spongebob");
// itemObj.setDescription("Patrick and Spongebob description");
// itemObj.setCategory("Classic");
// itemObj.setImageURL("images/patrickspongebob.jpg");
//
// appItems.push(itemObj);
console.log(appItems);

//var category1 = [appItems[0], appItems[1], appItems[2]];
//var category2 = [appItems[3], appItems[4], appItems[5]];

var itemsPerCategory = [{ categoryName: "Modern", items: category1 }, { categoryName: "Classic", items: category2 }];

var getItems = function (db) {
  db.find({}).then(function(doc){
    for(var i = 0; i < doc.length; i++){
      appItems[i] = doc[i];
    }
    //console.log(appItems);
    category1 = [appItems[0], appItems[1], appItems[2]];
    category2 = [appItems[3], appItems[4], appItems[5]];
    var itemsPerCategory = [{ categoryName: "Modern", items: category1 }, { categoryName: "Classic", items: category2 }];
    //console.log('category1\n' + category1);
    //console.log('category2\n' + category2);
    return itemsPerCategory;
  });
};

var getItem = function (itemID) {
    //this is hardcoded should be updated find item from items list with specified item ID
    return appItems[itemID - 1];
};
var exists = function (itemID) {
    //this is hardcoded should be updated find item from items list with specified item ID
    if(getItem)
    return true;
    else
    return false;
};

module.exports.getItems = getItems;
module.exports.getItem = getItem;
module.exports.exists = exists;
