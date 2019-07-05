const express = require('express');
const router = express.Router();
var todoList = require('../controller/userController');






module.exports = function(app) {

  var todoList = require('../controller/userController')

    app.route('/register')
      .post(todoList.register);

    app.route('/authenticate')
      .post(todoList.authenticate);


};