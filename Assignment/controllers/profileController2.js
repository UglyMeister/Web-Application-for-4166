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

}

function updateProfile(){

}

function updateRating(){

}

function updateFlag(){

}

function signout(){
  req.session.destroy();
  res.redirect('/index');
}
