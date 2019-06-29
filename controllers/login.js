const express = require('express');
const Joi = require('@hapi/joi').extend(require('joi-cpf-cnpj'));

const app = express.Router();

app.use(express.json());

const UserField = Joi.object().keys({
  name: Joi.string()
    .regex(/^[a-zA-Z]+$/)
    .min(3)
    .max(30)
    .required(),
  birthday: Joi.number()
    .interger()
    .min(1)
    .max(31)
    .required(),
  birthmonth: Joi.number()
    .interger()
    .min(1)
    .max(12)
    .required(),
  birthyear: Joi.number()
    .interger()
    .min(1900)
    .max(2005)
    .required(),
  email: Joi.string().email(),
  password: Joi.string(),
  question: Joi.string(),
  answer: Joi.string().alphanum(),
  cpf: Joi.document().cpf(),
});

const LoginField = Joi.object().keys({
  email: Joi.string().email(),
  password: Joi.string(),
});

const RecoverField = Joi.object().keys({
  email: Joi.string().email(),
  answer: Joi.string().alphanum(),
});

app.put('/api/account/create/client', function(req, res) {
  const result = Joi.validate(req.body, UserField);

  // Valid
  if (result.error === null) {
    // Add client to database
    // Get new client strucute from database and return
    var new_client = '';
    res.status(200).send(new_client);
  } else {
    // Falta retornar o que ta errado. Ver como funciona o retorno do Joi nesses casos
    res.status(400).send('Invalid parameters');
  }
});

app.put('/api/account/create/provider', function(req, res) {
  const result = Joi.validate(req.body, UserField);

  // Valid
  if (result.error === null) {
    // Add provider to database
    // Get new provider strucute from database and return
    var new_client = '';
    res.status(200).send(new_client);
  } else {
    // Falta retornar o que ta errado. Ver como funciona o retorno do Joi nesses casos
    res.status(400).send('Invalid parameters');
  }
});

app.get('/api/account/login/client', function(req, res) {
  const result = Joi.validate(req.body, LoginField);

  if (result != null) {
    // Falta retornar o que ta errado. Ver como funciona o retorno do Joi nesses casos
    res.status(400).send('Invalid parameters');
  }

  // Validate email and password using the database
  // Responder com true ou false
  // Ver como funciona o redirecionamento nesses casos
});

app.get('/api/account/login/provider', function(req, res) {
  const result = Joi.validate(req.body, LoginField);

  if (result != null) {
    // Falta retornar o que ta errado. Ver como funciona o retorno do Joi nesses casos
    res.status(400).send('Invalid parameters');
  }

  // Validate email and password using the database
  // Responder com true ou false
  // Ver como funciona o redirecionamento nesses casos
});

app.get('/api/account/recover/question', function(req, res) {
  // Recover selected question to display for the user
});

app.get('/api/account/recover', function(req, res) {
  const result = Joi.validate(req.body, RecoverField);

  if (result != null) {
    // Falta retornar o que ta errado. Ver como funciona o retorno do Joi nesses casos
    res.status(400).send('Invalid parameters');
  }

  // Verify if answer is correct

  // if correct, send email with password
  // Ver como envia o email
});

module.exports.router = app;
