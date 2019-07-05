var Cryptr = require('cryptr');
var express=require("express");
var connection = require('./../../config');
cryptr = new Cryptr('myTotalySecretKey');
var jwt = require('jsonwebtoken');

 
module.exports.register=function(req,res){

    var encryptedString = cryptr.encrypt(req.body.password);
    var user={
        "lastname":req.body.lastname,
        "firstname":req.body.firstname,
        "email":req.body.email,
        "password":encryptedString,
    }
    

        connection.query('INSERT INTO user SET ?',user, function (error, results, fields) {
          
            if (error) {
              res.json({
                  status:(400),
                  message:'there are some error with query'
              })
            }
            else{
                res.json({
                  status:true,
                  data:results,
                  message:'user registered sucessfully'
              })

          
          }
        })

}






module.exports.authenticate=function(req,res){
    var email=req.body.email;
    var password=req.body.password;

   
   
    connection.query('SELECT * FROM user WHERE email = ?',[email], function (error, results, fields) {
      if (error) {
          res.json({
            status:false,
            message:'there are some error with query'
            })
      }else{
      
        if(results.length >0){
            decryptedString = cryptr.decrypt(results[0].password);
            if(password==decryptedString){
              
                //res.redirect(`${frontendBaseUrl}/interface`);
                //token
                const SECRET_KEY = "secretkey23456";
                const  expiresIn  =  24  *  60  *  60;
                const  accessToken  =  jwt.sign({ Id_user:  results.insertId }, SECRET_KEY, { expiresIn:  expiresIn });
                res.status(200).send({ "results": results, "access_token":  accessToken, "expires_in":  expiresIn          
               });

            }else{
                res.json({
                  status:false,
                  message:"Email and password does not match"
                 });
            }
          
        }
        else{
          res.json({
              status:false,    
            message:"Email does not exits"
          });
        }
      }
    });
}