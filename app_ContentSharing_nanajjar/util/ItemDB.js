/* @nanajjar */
let Item = require('../models/Item');
let appItems = [];

let itemObj = new Item();
itemObj.setItemCode(1);
itemObj.setItemName("Buffalo Chicken Dip");
itemObj.setDescription("Buffalo Chicken Dip recipe description");
itemObj.setCategory("Appetizer");
itemObj.setImageURL("images/buffaloDip.jpg");

appItems.push(itemObj);
//console.log(appItems.length);

itemObj = new Item();
itemObj.setItemCode(2);
itemObj.setItemName("Stuffed Mushrooms");
itemObj.setDescription("Stuffed Mushrooms recipe description");
itemObj.setCategory("Appetizer");
itemObj.setImageURL("images/stuffedMushrooms.jpg");

appItems.push(itemObj);
console.log(appItems.length);

itemObj = new Item();
itemObj.setItemCode(3);
itemObj.setItemName("Red Pepper Hummus");
itemObj.setDescription("Red Pepper Hummus recipe description");
itemObj.setCategory("Appetizer");
itemObj.setImageURL("images/redHummus.jpg");

appItems.push(itemObj);

itemObj = new Item();
itemObj.setItemCode(4);
itemObj.setItemName("Chicken Parmesan");
itemObj.setDescription("Chicken Parmesan recipe description");
itemObj.setCategory("Main Dish");
itemObj.setImageURL("images/chickenParm.jpg");

appItems.push(itemObj);

itemObj = new Item();
itemObj.setItemCode(5);
itemObj.setItemName("Lasagna");
itemObj.setDescription("Lasagna recipe description");
itemObj.setCategory("Main Dish");
itemObj.setImageURL("images/lasagna.jpg");

appItems.push(itemObj);

itemObj = new Item();
itemObj.setItemCode(6);
itemObj.setItemName("Tuna Casserole");
itemObj.setDescription("Tuna Casserole recipe description");
itemObj.setCategory("Main Dish");
itemObj.setImageURL("images/tunaCasserole.jpg");

appItems.push(itemObj);
console.log(appItems);

var category1 = [appItems[0], appItems[1], appItems[2]];
var category2 = [appItems[3], appItems[4], appItems[5]];

var itemsPerCategory = [{ categoryName: "Appetizer", items: category1 }, { categoryName: "Main Dish", items: category2 }];

var getItems = function () {
    return itemsPerCategory;
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