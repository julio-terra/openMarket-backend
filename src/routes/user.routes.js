const express = require('express');

const Router = express.Router();
const { register, login, getUser} = require('../controllers/user')

Router.post('/register', register);
Router.post("/login", login);
Router.get('/:id',getUser);

module.exports = Router;