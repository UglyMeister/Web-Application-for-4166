var userProfile = require('../models/userProfile.js');
var userDB = require('../util/userDB.js');
var userItem = require('../models/userItem.js');
var express = require('express');
var session = require('express-session');

var currentUserProfile;

function main(req, res, next){
  if(req.session.theUser){
    var currentAction = req.action;
    if(currentAction == "save" || currentAction == "updateProfile" || currentAction == "updateRating" || currentAction == "updateFlag" || updateRating == "signout"){
      if(currentAction == "signout"){
        req.session.destroy();
      }else{
        var currentItemList = req.params.itemList;
        if(currentItemList == null || currentItemList == {} || currentItemList == []){
          next();
        }else{
          var currentItemCode = req.params.itemCode;
          var exists = false;
          currentItemList.forEach(element =>{
            if(element.code == currentItemCode){
              exists = true;
            }
          });
          if(!exists){
            next();
          }else{
            if(currentAction == "save"){
              currentItemList.forEach(element =>{
                if(element.code == currentItemCode){
                  next();
                }
              });
              var newUserItem = userItem.newUserItem();
            }
          }
        }

      }
    }else{
      next();
    }
  }else{
    req.session.theUser = userDB.getUsers()[0];
    currentUserProfile = new userProfile;
    req.session.userProfile = currentUserProfile.getItems();
  }
}

module.exports = main;
