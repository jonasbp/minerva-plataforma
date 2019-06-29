const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); //para o password
/*
mongoose.connect('mongodb://localhost/loginapp')
var db = mongoose.connection;
não precisa disso se não vai ter duas conexoes com o banco
*/
const UserSchema = mongoose.Schema({
  username: {
    type: String,
    index: true,
  },
  password: {
    type: String,
  },
  email: {
    type: String,
  },
  name: {
    type: String,
  },
});

let User = mongoose.model('User', UserSchema);
User.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};
module.exports = User;
