const { check, validationResult } = require("express-validator");
const User = require("../models/user");

module.exports = {
  store(req, res) {
    console.log(req.body);
    console.log(req.body.test);
    const {
      name,
      email,
      username,
      password,
      password_confirm,
      age,
      endereco,
      phone_num,
      live_with,
      secret_word,
      isClient,
      cpf
    } = req.body;
    //validation
    req.checkBody("name", "Name is required").notEmpty();
    req.checkBody("age", "Age is required").notEmpty();
    req.checkBody("endereco", "Endereco is required").notEmpty();
    req.checkBody("phone_num", "Phone number is required").notEmpty();
    req.checkBody("live_with", "Live with is required").notEmpty();
    req.checkBody("secret_word", "Secret word is required").notEmpty();
    req.checkBody("isClient", "Is client is required").notEmpty();
    req.checkBody("cpf", "Cpf is required").notEmpty();
    req.checkBody("email", "Email is required").notEmpty();
    req.checkBody("email", "Email is not valid").isEmail();
    req.checkBody("username", "Username is required").notEmpty();
    req.checkBody("password", "Password is required").notEmpty();
    req
      .checkBody("password_confirm", "Password do not match")
      .equals(req.body.password);

    const errors = req.validationErrors();
    if (errors) {
      req.flash("error_msg", errors);
      res.render("register", {
        errors: errors
      });
    } else {
      console.log("Criando Usuario...");
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
        console.log("Usuario Criado: " + user);
      });
      req.flash("success_msg", "Registrado com sucesso");
      res.redirect("/users/login");
    }
  }
};
