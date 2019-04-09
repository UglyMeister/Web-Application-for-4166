
let appUsers = [];
var User = require('../models/User');
let userObj = new User();

// userObj.setUserID(1);
// userObj.setUserName("Fred");
// userObj.setEmail("fyork@gmail.com");
//
// userObj
// appUsers.push(userObj);

let addUser = function (id, name, email) {
    userObj = new User();
    userObj.setUserID(id);
    userObj.setUserName(name);
    userObj.setEmail(email);

    appUsers.push(userObj);
    return appUsers;
};

let addUser2 = async function (db){
  
  console.log("addUser2: " + db);
  userObj = new User();

  // db.then(function(doc){
  //   console.log("addUser2 doc check " + doc);
  //   userObj.setUserID(doc.id);
  //   userObj.setUserName(doc.name);
  //   userObj.setEmail(doc.email);
  //   userObj.setPassword(doc.password);
  // });

  userObj.setUserID(db.id);
  userObj.setUserName(db.name);
  userObj.setEmail(db.email);
  userObj.setPassword(db.password);
  console.log("addUser2 userObj check " + userObj.getUserName());

  appUsers.push(userObj);
  console.log("appUsers: " + JSON.stringify(appUsers));
  return appUsers;
};


let getUser = function (email) {
    console.log("looking for user");
    for (let i =0;i<appUsers.length;i++){
        console.log(appUsers[i]);
        if (appUsers[i].email == email) {
            console.log("User found with email " + email);
            return appUsers[i];
        }
    }
    return null;
};

let getAllUsers = function () {
    return appUsers;
};

let emailExists = function (email) {
    let u = getUser(email);
    return (u != null);
};

module.exports.getUser = getUser;
module.exports.getAllUsers = getAllUsers;
module.exports.emailExists = emailExists;
module.exports.addUser2 = addUser2;
