var express=require("express");
var Lines = require ('../model/lineModel');





exports.insert_a_Line = function(req, res) {

  var new_line = new Lines(req.body);

  if(!new_line.Content_line_lang1 || !new_line.Num_corpus) {

    res.status(400).send({
      error:true,
      message:'there is a problem!'
    });
  }
  else{

    Lines.insertLine(new_line, function(err, line) {
      if (err){
        res.send(err);
        console.log('line can not be inserted');
      }
      else {
        res.json(line);
      }
      
    });
  }
};


exports.delete_a_line = function(req, res) {

  Lines.deleteLine(req.params.Id_line, function(err, line){
    if (err)
      res.send(err);
    res.json({ message : 'line successfully deleted'});

  });

};



exports.get_a_line = function(req, res) {

  Lines.getLine(req.params.Id_line, function(err, line) {
    if (err)
      res.send(err);
    res.json(line);
  });
};



exports.update_a_line = function(req, res) {

    console.log(req.body.Content_line_lang1);   
  Lines.updateLine(req.body.Content_line_lang1, req.body.Content_line_lang2, req.body.Line_status, req.body.Num_corpus, req.params.Id_line, function(err, line) {
    if (err) {
      res.send(err);
    }

    else{
    res.json(line);
    } 

  });
};