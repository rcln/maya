var express=require("express");
var Corpus = require ('../model/corpusModel');





exports.insert_a_Corpus = function(req, res) {

	var new_corpus = new Corpus(req.body);

	if(!new_corpus.Name_corpus || !new_corpus.Language1 || !new_corpus.Type_corpus || !new_corpus.Num_user) {

		res.status(400).send({
			error:true,
			message:'there is a problem!'
		});
	}
	else{

		Corpus.insertCorpus(new_corpus, function(err, corpus) {
			if (err){
				res.send(err);
				console.log('corpus can not be inserted');
			}
			res.json(corpus);
		});
	}
};



exports.delete_a_corpus = function(req, res) {

	Corpus.deleteCorpus(req.params.Id_corpus, function(err, corpus){
		if (err)
			res.send(err);
		res.json({ message : 'corpus successfully deleted'});

	});

};



exports.get_a_corpus = function(req, res) {

	Corpus.getCorpus(req.params.Id_corpus, function(err, corpus) {
		if (err)
			res.send(err);
		res.json(corpus);
	});
};



exports.update_a_corpus = function(req, res) {
  var new_corpus = new Corpus(req.body);

  Corpus.updateCorpus(req.params.Name_corpus, req.params.Language1, req.params.Language2, req.params.Type_corpus, req.params.Corpus_status, req.params.Num_user, req.params.Id_corpus, function(err, corpus) {
    if (err) {
      res.send(err);
    }

    else{
    res.json(corpus);
    } 
    
  });
};