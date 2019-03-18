var userDB = require('../util/userDB.js');

module.exports = function(){
  return function(req, res, next){
    if(!req.session.theUser){
      var newUser = userDB.getUsers();
      req.session.theUser = newUser;
      var newUserProfile = userDB.getUserProfiles();
      req.session.userProfile = newUserProfile;
      
    }


    next();
  }
}
