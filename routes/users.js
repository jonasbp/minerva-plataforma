const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const User = require("../models/user");
const UserController = require("../controllers/UserController");

// Register
router.get("/register", function(req, res) {
  res.render("register");
});

// Login
router.get("/login", function(req, res) {
  res.render("login");
});

router.post("/register", UserController.store);

module.exports = router;
