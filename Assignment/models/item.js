function newItem(code, name, category, description, rating){
  var url = getImgURL(name);
  return {code: code, name: name, category: category, description: description, url: url};
}

var getImgURL = function(name){
 var url = "../assets/images/" + name + ".jpg";
 return url;
}


module.exports = {getImgURL, newItem};
