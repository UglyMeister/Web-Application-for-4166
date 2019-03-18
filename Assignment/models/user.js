var uid;
var firstName;
var lastName;
var email;
var addr1;
var addr2;
var city;
var state;
var zip;
var country;

function newUser(uid, fName, lName, email){
  return {uid: uid, firstName: fName, lastName: lName, email: email};
}

module.exports = {uid, firstName, lastName, email, addr1, addr2, city, state, zip, country, newUser};
