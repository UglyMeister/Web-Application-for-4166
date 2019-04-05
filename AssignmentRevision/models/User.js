
/* @nanajjar */
class User {
    constructor(id, name, email) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = "";
    }


    setUserID(uID) {
        this.id = uID;
    };

    getUserID() {
        return this.id;
    };


    setUserName(uName) {
        this.name = uName;
    };

    geUserName() {
        return this.name;
    };
    setEmail(uEmail) {
        this.email = uEmail;
    };

    getEmail() {
        return this.email;
    };

    getPassword(){
      return this.password;
    }
    setPassword(pass){
      this.password = pass;
    }
}
// return an object with property values set above
module.exports = User;
