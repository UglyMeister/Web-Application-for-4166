var user = require('../models/user.js');

var user1 = user.newUser(1, 'fred', 'last', 'placeholder@gmail.com');

function getUsers(){
  var array = [user1];
  return array;
}
