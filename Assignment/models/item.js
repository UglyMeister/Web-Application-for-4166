function newItem(code, name, category, description, rating){
  return {code: code, name: name, category: category, description: description, rating: rating};
}

function getImgURL(code){
 url = "../assets/images/" + code;
 return url;
}

module.exports = {getImgURL, newItem};
