/* @nanajjar */
let Item = require('../models/Item');
// let appItems = [];
//
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
// console.log(appItems);
//
// var category1 = [appItems[0], appItems[1], appItems[2]];
// var category2 = [appItems[3], appItems[4], appItems[5]];
//
// var itemsPerCategory = [{ categoryName: "Modern", items: category1 }, { categoryName: "Classic", items: category2 }];



var getItems = function (db) {
    //return itemsPerCategory;
    // return new Promise((resolve, reject) => {
    //   db.find({}).then(data => {
    //     console.log("in find all " + data);
    //     resolve(data);
    //   })
    // })
    return promise = db.find({}).exec();
};

var getItem = function (db, itemID) {
    //this is hardcoded should be updated find item from items list with specified item ID
    //return appItems[itemID - 1];
    return promise = db.find({itemCode: itemID}).exec();
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
