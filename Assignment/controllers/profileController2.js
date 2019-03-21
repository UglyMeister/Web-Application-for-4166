var express = require('express');

var userDB = require('../util/userDB.js');
var userItem = require('../models/userItem.js');
var userProfile = require('../models/userProfile.js');
var user = require('../models/user.js');

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
          console.log("save");
        }
        if(req.params.action == "updateProfile"){//update profile protocol
          updateProfile();
          console.log("update profile")
        }
        if(req.params.action == "updateRating"){//update rating protocol
          updateRating();
          console.log("update rating");
        }
        if(req.params.action == "updateFlag"){//update flag protocol
          updateFlag();
          console.log("update flag");
        }
        if(req.params.action == "deleteItem"){
          deleteItem();
          console.log("delete item");
        }
        if(req.params.action == "signout"){//signout protocol
          signout();
          console.log("signout");
        }
      }else{//there is no specific action taking place
        res.render('myItems', {session: req.session, userProfile: userProfile});
      }

    }
    //is the user not logged in right now?
    if(!req.session.theUser || req.session.theUser == "" || req.session.theUser == null){
      var newUser = userDB.getUsers();
      req.session.theUser = newUser;
      var newUserProfile = userDB.getUserProfiles();
      req.session.userProfile = newUserProfile;
      console.log(req.session.userProfile);
      res.render('index', {session: req.session});
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
            res.render('myItems', {session: req.session, userProfile: userProfile});
          }else{//item does not exist within the user profile
            var newUserItem = userItem.newUserItem(element, 0, false);
            newUserProfile.addItem(newUserItem);
            req.session.userProfile = newUserProfile;
            res.render('myItems', {session: req.session, userProfile: userProfile});
          }
        });
      }else{//specified item code is not within the item list
        res.render('myItems', {session: req.session, userProfile: userProfile});
      }
    });
  }else{
    res.render('myItems', {session: req.session, userProfile: userProfile});
  }
}

function updateProfile(){
  if(hasItemList()){
    req.params.itemList.forEach(element => {
      if(element.code == req.params.itemCode){//specified item code is within the item list
        //check if item already exists in user profile
        req.session.userProfile.getItems().forEach(item => {
          if(item == element){//item exists in the user profile
            req.session.theItem = item;
            res.render('feedback', {session: req.session});
          }else{//item doesn't exist within user profile
            res.render('myItems', {session: req.session, userProfile: userProfile});
          }
        });
      }
    });
  }else{
    res.render('myItems', {session: req.session, userProfile: userProfile});
  }
}

function updateRating(){
  if(hasItemList()){
    if(req.params.rating || (req.params.rating >= 0 && req.params.rating <= 5)){//rating value exists
      if(req.params.rating == 0){//swap attributes and give to profile
        req.params.itemList[0].rating = 0;
        newUserProfile.updateItem(req.params.itemList[0]);//update user profile rating value for the item
      }
      if(req.params.rating == null || req.params.rating == ""){
        //do nothing
      }
      if(req.params.rating == req.params.itemList[0].rating){
        //do nothing
      }else{//swap attributes and give to profile
        req.params.itemList[0].rating = req.params.rating;
        newUserProfile.updateItem(req.params.itemList[0]);
      }
      req.session.userProfile = newUserProfile;
      res.render('myItems', {session: req.session, userProfile: userProfile});
    }else{//rating value doesn't exist or falls outside of acceptable parameters
      res.render('myItems', {session: req.session, userProfile: userProfile});
    }
  }else{
    res.render('myItems', {session: req.session, userProfile: userProfile});
  }
}

function updateFlag(){
  if(hasItemList()){
    if(req.params.flag || req.params.flag == true || req.params.flag == false){
      if(req.params.flag == "" || req.params.flag == null){
        //do nothing
      }
      if(req.params.flag == req.params.itemList[0].madeIt){
        //do nothing
      }else{
        req.params.itemList[0].madeIt = req.params.flag;
        newUserProfile.updateItem(req.params.itemList[0]);
      }
      req.session.userProfile = newUserProfile;
      res.render('myItems', {session: req.session, userProfile: userProfile});
    }else{
      res.render('myItems', {session: req.session, userProfile: userProfile});
    }
  }else{
    res.render('myItems', {session: req.session, userProfile: userProfile});
  }
}

function deleteItem(){
  if(hasItemList()){
    newUserProfile.getItems().forEach(element => {
      if(element == req.params.itemList[0]){
        newUserProfile.removeItem(req.params.itemList[0].item.code);
      }
      req.session.userProfile = newUserProfile;
      res.render('myItems', {session: req.session, userProfile: userProfile});
    });
  }else{
    res.render('myItems', {session: req.session, userProfile: userProfile});
  }
}

function signout(){
  req.session.destroy();
  res.render('index', {session: req.session});
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
