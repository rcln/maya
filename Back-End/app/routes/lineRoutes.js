const express = require('express');
const router = express.Router();


module.exports = function(app) {

  var todoList = require('../controller/lineController')

    app.route('/line')
      .post(todoList.insert_a_Line);

    app.route('/line/:Id_line')
	.delete(todoList.delete_a_line)
	.get(todoList.get_a_line)
	.put(todoList.update_a_line);


};
