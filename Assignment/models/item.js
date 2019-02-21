/*var this = {
 code: "1",
 name: "",
 category: "",
 description: "",
 rating: ""
}*/


function Item (code, name, category, description, rating){
  this.code = code;
  this.name = name;
  this.category = category;
  this.description = description;
  this.rating = rating;
  return this;
}
/*this = function(){
  code = "";
  name = "";
  category = "";
  description = "";
  rating = "";
}*/


getImageURL = function(){
 url = "../assets/images/" + this.code;
 return url;
}

getCode = function(){
 return this.code;
}
setCode = function(code){
 this.code = code;
}

getName = function(){
 return this.name;
}
setName = function(name){
 this.name = name;
}

getCategory = function(){
 return this.category;
}
setCategory = function(category){
 this.category = category;
}

getDescription = function(){
 return this.description;
}
setDescription = function(description){
 this.description = description;
}

getRating = function(){
 return this.rating;
}
setRating = function(rating){
 this.rating = rating;
}

module.exports = {Item, getCode, setCode, getName, setName, getCategory, setCategory, getDescription, setDescription, getRating, setRating}
