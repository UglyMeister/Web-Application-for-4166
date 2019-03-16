var userProfile = require('../models/userProfile.js');
var userDB = require('../util/userDB.js');
var express = require('express');
var session = require('express-session');

var currentUserProfile;

function main(req, res, next){
  if(req.session.theUser){

  }else{
    req.session.theUser = userDB.getUsers()[0];
    currentUserProfile = new userProfile;
    req.session.userProfile = currentUserProfile.getItems();
  }
}

module.exports = main;
