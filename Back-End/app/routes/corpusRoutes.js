const express = require('express');
const router = express.Router();


module.exports = function(app) {

  var todoList = require('../controller/corpusController')

    app.route('/corpus')
      .post(todoList.insert_a_Corpus);


    app.route('/corpus/:Id_corpus')
	.delete(todoList.delete_a_corpus)
	.get(todoList.get_a_corpus)
	.put(todoList.update_a_corpus);

    


};
