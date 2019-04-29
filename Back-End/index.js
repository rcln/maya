var express=require("express");
var bodyParser=require('body-parser');
//var cors=require('cors'); 

var connection = require('./config');
var app = express();
 
var authenticateController=require('./controllers/auth-controller');
var registerController=require('./controllers/register-controller');
var corpusController=require('./controllers/corpus-controller');
var lineController=require('./controllers/line-controller');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());

/* route to handle login, registration, add corpus and add line */
app.post('/api/register',registerController.register); /* "/api" can be deleted */
app.post('/api/authenticate',authenticateController.authenticate);
app.post('/api/corpus',corpusController.corpus);
app.delete('/api/deleteCorpus',corpusController.deleteCorpus);
app.post('/api/line',lineController.line);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/auth-controller', authenticateController.authenticate);
app.post('/controllers/corpus-controller', corpusController.corpus);
app.delete('/controllers/corpus-controller', corpusController.deleteCorpus);
app.post('/controllers/line-controller', lineController.line);



app.listen(3000);