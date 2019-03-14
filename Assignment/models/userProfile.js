var userItem = require('./userItem.js');
var uid;
var userItems = [];

function addItem(newItem){
  userItems.forEach(element => {
    if(newItem.item.code == element.item.code){
      updateItem(newItem);
      return;
    }
  });
  userItems.push(newItem);
  console.log("added new item");
}
function removeItem(item){
  for (var i = 0; i < userItems.length; i++){
    if(item.item.code == userItems[i].item.code){
      userItems.splice(i, 1);
      console.log("removed item from list");
      return;
    }
  }
  console.log("item not found to remove");
}
function updateItem(item){
  for(var i = 0; i < userItems.length; i++){
    if(userItems[i].item.code == item.item.code){
      userItems[i].rating = item.rating;
      userItems[i].madeIt = item.madeIt;
      console.log("replaced existing item rating and madeIt status");
    }
  }
}
function getItems(){
  return userItems;
}
function emptyProfile(){
  userItems = [];
}

module.exports = {addItem, removeItem, updateItem, getItems, emptyProfile};
