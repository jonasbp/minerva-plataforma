var express = require('express');
var router = express.Router();

var User = require('../models/user')

// Register
router.get('/register', function(req,res){
    res.render('register');
});

// Login
router.get('/login', function(req,res){
    res.render('login');
});


router.post('/register', function(req,res){
    var name = req.body.name
    var email = req.body.email
    var username = req.body.username
    var password = req.body.password
    var password = req.body.password2
    //até aqui funcionou
    //validation
    req.checkBody('name','Name is required').notEmpty()
    req.checkBody('email','Email is required').notEmpty()
    req.checkBody('email','Email is not valid').isEmail()
    req.checkBody('username','Username is required').notEmpty()
    req.checkBody('password','Password is required').notEmpty()
    req.checkBody('password2','Password do not match').equals(req.body.password)
    
    var errors = req.validationErrors()
    if(errors){
      res.render('register',{
           errors:errors
      })
    } else{
            console.log('Passed')
            var newUser = new User({
                 name: name,
                 email:email,
                 username: username,
                 password: password
            })

            User.createUser(newUser,function(err,user){
                 if(err) throw err;
                 console.log(user)
            })
            req.flash('success_msg','Registrado com sucesso')
            res.redirect('/users/login')
    }
})

/*
use loginapp
db.users.find()
npm install bcrypt
npm install bcrypt --save

*/



module.exports = router;                     
