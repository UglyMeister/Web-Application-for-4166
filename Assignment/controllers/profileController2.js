var userDB = require('../util/userDB.js');

module.exports = function(){
  return function(req, res, next){
    if(req.session.theUser){
      var action = req.params.action;

      res.redirect('/');

    }
    if(!req.session.theUser || req.session.theUser == "" || req.session.theUser == null){
      var newUser = userDB.getUsers();
      req.session.theUser = newUser;
      var newUserProfile = userDB.getUserProfiles();
      req.session.userProfile = newUserProfile;
      res.redirect('/');
    }

  }
}
