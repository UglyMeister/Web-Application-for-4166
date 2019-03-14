var uid;
var userItems = [];

function addItem(newItem){
  userItems.forEach(element => {
    if(newItem.code == element.code){
      element.rating = newItem.rating;
      element.madeIt = newItem.rating;
    }
  })
}
function removeItem(item){

}
function updateItem(item){

}
function getItems(){

}
function emptyProfile(){

}
