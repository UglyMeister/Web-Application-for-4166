var mongoose = require('mongoose')
, Schema = mongoose.Schema
, ObjectId = Schema.ObjectId;

var userSchema = new mongoose.Schema({
    firstName: {type: String, default: 'firstName'},
    lastName: {type: String, default: 'lastName'},
    email: {type: String, default: 'email'},
    password: {type: String, default: 'pass'}
  });

module.exports = mongoose.model('User', userSchema,'Users');
