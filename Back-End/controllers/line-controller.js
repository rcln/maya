var express=require("express");
var connection = require('./../config');





module.exports.line=function(req,res){
    var line={
          "Content_line_lang1":req.body.Content_line_lang1,
          "Content_line_lang2":req.body.Content_line_lang2,
          "Line_status":req.body.Line_status,
          "Num_corpus":req.body.Num_corpus,
    }


    connection.query('INSERT INTO lines SET ?',line, function (error, results, fields) {
          
          if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }
          else{
              res.json({
                status:true,
                data:results,
                message:'line inserted sucessfully'
            })
          }
        })

   }






module.exports.deleteLine=function(req,res){

    var Id_corpus=req.body.Id_corpus;
    
  


    connection.query('DELETE * FROM corpus WHERE Id_corpus = ?',[Id_corpus], function (error, results, fields) {
          console.log("ici c'est la suppression");
          if (error) {
            res.json({
                status:false,
                message:'there are some error with query'
            })
          }
          else{
              res.json({
                status:true,
                data:results,
                message:'corpus delete sucessfully'
            })
          }
        })

   }


