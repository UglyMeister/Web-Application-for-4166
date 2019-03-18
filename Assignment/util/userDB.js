var user = require('../models/user.js');
var userProfile = require('../models/userProfile.js')

var user1 = user.newUser(1, 'fred', 'last', 'placeholder@gmail.com');
var userProfile1 = userProfile.newUserProfile(1, []);

function getUsers(){
  //var array = [user1];
  //return array;
  return user1;
}
function getUserProfiles(){
  return userProfile1;
}


module.exports = {getUsers, getUserProfiles};
