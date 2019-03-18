var express = require('express');

var userDB = require('../util/userDB.js');
var userItem = require('../models/userItem.js');

var router = express.Router();

router.get('/', function(req, res){
  main(req, res);
});
router.post('/', function(req, res){
  main(req, res);
});

function main(req, res){
    //has someone logged in yet?
    if(req.session.theUser){
      //if there is a specific action that is taking place
      if(req.params.action){
        console.log("there is action");
        if(req.params.action == "save"){//save protocol
          save();
          console.log(req.params.session);
        }
        if(req.params.action == "updateProfile"){//update profile protocol
          updateProfile();
        }
        if(req.params.action == "updateRating"){//update rating protocol
          updateRating();
        }
        if(req.params.action == "updateFlag"){//update flag protocol
          updateFlag();
        }
        if(req.params.action == "signout"){//signout protocol
          signout();
        }
      }else{//there is no specific action taking place
        res.render('myItems', {});
      }

    }
    //is the user not logged in right now?
    if(!req.session.theUser || req.session.theUser == "" || req.session.theUser == null){
      var newUser = userDB.getUsers();
      req.session.theUser = newUser;
      var newUserProfile = userDB.getUserProfiles();
      req.session.userProfile = newUserProfile;
      res.render('index', {});
    }

  }



function save(){
  if(hasItemList()){
    //check param itemCode
    req.params.itemList.forEach(element => {
      if(element.code == req.params.itemCode){//specified item code is within the item list
        //check if item already exists in user profile
        req.session.userProfile.getItems().forEach(item => {
          if(item == element){//item exists in the user profile
            res.render('myItems', {});
          }else{//item does not exist within the user profile
            var newUserItem = userItem.newUserItem(element, 0, false);
            newUserProfile.addItem(newUserItem);
            req.session.userProfile = newUserProfile;
            res.render('myItems', {});
          }
        });
      }else{//specified item code is not within the item list
        res.render('myItems', {});
      }
    });
  }else{
    res.render('myItems', {});
  }
}

function updateProfile(){
  if(hasItemList()){

  }else{
    res.render('myItems', {});
  }
}

function updateRating(){
  if(hasItemList()){

  }else{
    res.render('myItems', {});
  }
}

function updateFlag(){
  if(hasItemList()){

  }else{
    res.render('myItems', {});
  }
}

function signout(){
  req.session.destroy();
  res.render('index', {});
}

//checks to see whether or not the itemList exists
function hasItemList(){
  if(req.params.itemList && req.params.itemList != "" && req.params.itemList != null){
    return true;
  }else{//if the item list doesn't exist then the function will return false, otherwise it will return true
    return false;
  }
}

module.exports = router;
