module.exports = {
 item = {
  code: "",
  name: "",
  category: "",
  description: "",
  rating: ""
},



 getImageURL = function(){
  url = "../assets/images/" + item.code;
  return url;
},

 getCode = function(){
  return item.code;
},
 setCode = function(code){
  item.code = code;
},

 getName = function(){
  return item.name;
},
 setName = function(name){
  item.name = name;
},

 getCategory = function(){
  return item.category;
},
 setCategory = function(category){
  item.category = category;
},

 getDescription = function(){
  return item.description;
},
 setDescription = function(description){
  item.description = description;
},

 getRating = function(){
  return item.rating;
},
 setRating = function(rating){
  item.rating = rating;
}
}
