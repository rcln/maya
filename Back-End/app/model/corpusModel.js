var connection = require('./../../config');


//task object constructor
var Corpus = function(corpus){
	  //this.Id_corpus = corpus.Id_corpus;
    this.Name_corpus = corpus.Name_corpus;
    this.Language1 = corpus.Language1;
    this.Language2 = corpus.Language2;
    this.Type_corpus = corpus.Type_corpus;
    this.Corpus_status = corpus.Corpus_status;
    this.Num_user = corpus.Num_user;

};

Corpus.insertCorpus = function createCorpus(newCorpus, result) {

	connection.query('INSERT INTO corpus SET ?',[newCorpus], function (err, res) {

		if (err) {
            console.log("error: ", err);
            //result(err, null);
          }
          else{
                console.log(res.insertId);
                result(null, res.insertId);
                message:'corpus inserted sucessfully';
            
          }
	});

};


Corpus.deleteCorpus = function removeCorpus(Id_corpus, result) {
  
  connection.query('DELETE FROM corpus WHERE Id_corpus = ?',[Id_corpus], function (error, results, fields) {
          
          if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }
          else{
              
                message:'corpus delete sucessfully'
                result(null, results);
          }
        })

}



Corpus.getCorpus = function getCorpus(Id_corpus, result) {
  
  connection.query('SELECT * FROM corpus WHERE Id_corpus = ?',[Id_corpus], function (error, results, fields) {
          
          if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }
          else{

             result(null, results);
          }

        })

}



Corpus.updateCorpus = function MajCorpus(Name_corpus, Language1, Language2, Type_corpus, Corpus_status, Num_user, Id_corpus, result){

  connection.query("UPDATE corpus SET Name_corpus=?, Language1=?, Language2=?, Type_corpus=?, Corpus_status=?, Num_user=? WHERE Id_corpus=? ", [Name_corpus, Language1, Language2, Type_corpus, Corpus_status, Num_user, Id_corpus], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};




module.exports = Corpus;