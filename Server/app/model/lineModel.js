var connection = require('./../../config');


//Lines object constructor
var Lines = function(line){
	  //this.Id_corpus = corpus.Id_corpus;
    this.Content_line_lang1 = line.Content_line_lang1;
    this.Content_line_lang2 = line.Content_line_lang2;
    this.Line_status = line.Line_status;
    this.Num_corpus = line.Num_corpus;

};




Lines.insertLine = function createLine(newLine, result) {

	connection.query('INSERT INTO line SET ?',[newLine], function (err, res) {

		if (err) {
            console.log("error: ", err);
            //result(err, null);
          }
          else{
                result(null, res);
                
            
          }
	});

};



Lines.deleteLine = function removeLine(Id_line, result) {
  
  connection.query('DELETE FROM line WHERE Id_line = ?',[Id_line], function (error, results, fields) {
          
          if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }
          else{
              
                message:'line delete sucessfully'
                result(null, results);
          }
        })

}




Lines.getLine = function getLine(Id_line, result) {
  
  connection.query('SELECT * FROM line WHERE Id_line = ?',[Id_line], function (error, results, fields) {
          
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



   Lines.updateLine = function MajLine(Id_line, Content_line_lang1, Content_line_lang2, Line_status, Num_corpus, result){

  connection.query("UPDATE line SET Content_line_lang1=?, Content_line_lang2=?, Line_status=?, Num_corpus=? WHERE Id_line=? ", [Id_line, Content_line_lang1, Content_line_lang2, Line_status, Num_corpus], function (err, res) {
          if(err) {
              console.log("error: ", err);
                result(null, err);
             }
           else{   
             result(null, res);
                }
            }); 
};



module.exports = Lines;
