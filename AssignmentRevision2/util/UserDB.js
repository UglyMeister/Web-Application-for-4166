/* @nanajjar */

// /* @nanajjar */

const User = require('../models/User');

module.exports.getUsers = function () {
    return new Promise((resolve, reject) => {
        User.find().then(data => {
            resolve(data);
        }).catch(err => {
            return reject(err);
        })
    })
}//end findAll by category

module.exports.getUser = function (userEmail) {
    return new Promise((resolve, reject) => {
        User.findOne({
            email: userEmail
        }).exec().then(data => {
            console.log("here +"+userEmail);
            resolve(data);
        }).catch(err => {
            return reject(err);
        })
    })
}//end find item

module.exports.addUser = function (userEmail, userPass, firstName, lastName){
  var newUser = new User({
    firstName: firstName,
    lastName: lastName,
    email: userEmail,
    password: userPass
  });
  newUser.save(function(err, user){
    if(err) return console.error(err);
    console.log(user.firstName + "saved to Users collection");
  });
}//end add user
