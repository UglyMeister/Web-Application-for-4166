var userDB = require('../util/userDB.js');

module.exports = function(){
  return function(req, res, next){
    //has someone logged in yet?
    if(req.session.theUser){
      //if there is a specific action that is taking place
      if(req.params.action){
        console.log("there is action");
        if(req.params.action == "save"){//save protocol

        }
        if(req.params.action == "updateProfile"){//update profile protocol

        }
        if(req.params.action == "updateRating"){//update rating protocol

        }
        if(req.params.action == "updateFlag"){//update flag protocol

        }
        if(req.params.action == "signout"){//signout protocol
          signout();
        }
      }else{//there is no specific action taking place
        res.redirect('/myItems');
        next();
      }

    }
    //is the user not logged in right now?
    if(!req.session.theUser || req.session.theUser == "" || req.session.theUser == null){
      var newUser = userDB.getUsers();
      req.session.theUser = newUser;
      var newUserProfile = userDB.getUserProfiles();
      req.session.userProfile = newUserProfile;
      res.redirect('/');
    }

  }
}


function save(){
  if(hasItemList()){

  }else{
    res.redirect('/myItems');
  }
}

function updateProfile(){
  if(hasItemList()){

  }else{
    res.redirect('/myItems');
  }
}

function updateRating(){
  if(hasItemList()){

  }else{
    res.redirect('/myItems');
  }
}

function updateFlag(){
  if(hasItemList()){

  }else{
    res.redirect('/myItems');
  }
}

function signout(){
  req.session.destroy();
  res.redirect('/index');
}

//checks to see whether or not the itemList exists
function hasItemList(){
  if(req.params.itemList){
    return true;
  }else{//if the item list doesn't exist then the function will return false, otherwise it will return true
    return false;
  }
}
