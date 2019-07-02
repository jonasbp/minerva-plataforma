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
        required: true,
        index: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    password2: {
        type: String,
        required: true,
        select: false
    },
    endereco: {
        type: String,
        required: true
    },
    phone_num: {
        type: Number,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    live_with: {
        type: String,
        required: true
    },
    secret_word: {
        type: String,
        required: true
    },
    isClient: {
        type: Boolean,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true,
        
    }
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
