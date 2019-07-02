const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const User = require('../models/user');

// Register
router.get('/register', function(req, res) {
  res.render('register');
});

// Login
router.get('/login', function(req, res) {
  res.render('login');
});

router.post('/register', function(req, res) {
  const { name, email, username, password, password_confirm, age, endereco, phone_num, live_with, secret_word, isClient, cpf } = req.body;
  //validation
  req.checkBody('name', 'Name is required').notEmpty();
  req.checkBody('age', 'Name is required').notEmpty();
  req.checkBody('endereco', 'Name is required').notEmpty();
  req.checkBody('phone_num', 'Name is required').notEmpty();
  req.checkBody('live_with', 'Name is required').notEmpty();
  req.checkBody('secret_word', 'Name is required').notEmpty();
  req.checkBody('isClient', 'Name is required').notEmpty();
  req.checkBody('cpf', 'Name is required').notEmpty();
  req.checkBody('email', 'Email is required').notEmpty();
  req.checkBody('email', 'Email is not valid').isEmail();
  req.checkBody('username', 'Username is required').notEmpty();
  req.checkBody('password', 'Password is required').notEmpty();
  req
    .checkBody('password_confirm', 'Password do not match')
    .equals(req.body.password);
   


  const errors = req.validationErrors();
  if (errors) {
    req.flash('error_msg', errors);
    res.render('register', {
      errors: errors,
    });
  } else {
    console.log('Criando Usuario...');
    let newUser = new User({
      name: name,
      email: email,
      username: username,
      password: password,
      age: age,
      endereco: endereco,
      phone_num: phone_num,
      live_with: live_with,
      secret_word: secret_word,
      isClient: isClient,
      cpf: cpf
    });
    User.createUser(newUser, function(err, user) {
      if (err) throw err;
      console.log('Usuario Criado: ' + user);
    });
    req.flash('success_msg', 'Registrado com sucesso');
    res.redirect('/users/login');
  }
});

module.exports = router;
