var express=require("express");
var connection = require('./../config');





module.exports.corpus=function(req,res){
    var corpus={
        "Name_corpus":req.body.Name_corpus,
        "Language1":req.body.Language1,
        "Language2":req.body.Language2,
        "Type_corpus":req.body.Type_corpus,
        "Corpus_status":req.body.Corpus_status,
        "Num_user":req.body.Num_user
    }


    connection.query('INSERT INTO corpus SET ?',corpus, function (error, results, fields) {
          
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
                message:'corpus inserted sucessfully'
            })
          }
        })

   }




module.exports.deleteCorpus=function(req,res){

    var Name_corpus=req.body.Name_corpus;
    var Num_user=req.body.Num_user
  
    connection.query('DELETE FROM corpus WHERE Name_corpus = ? AND Num_user = ?',[Name_corpus, Num_user], function (error, results, fields) {
          
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




module.exports.getCorpus=function(req,res){

    var Name_corpus = req.body.Name_corpus,      
    var Num_user = req.body.Num_user



    connection.query('SELECT * FROM corpus WHERE Name_corpus = ? AND Num_user = ?',[Name_corpus, Num_user], corpus , function (error, results, fields) {
          
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
                message:'corpus inserted sucessfully'
            })
          }
        })

   }

