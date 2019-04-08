var express=require("express");
var bodyParser=require('body-parser');
//var cors=require('cors'); 

var connection = require('./config');
var app = express();
 



 /////////////////////////////////////////////////////////////////////////////



 //////////////////////////////////////////////////////////////////////////////
var authenticateController=require('./controllers/auth-controller');
var registerController=require('./controllers/register-controller');
 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.use(cors());


//a remplacer par notre interface
app.get('/', function (req, res) {  
   res.sendFile( __dirname + "/" + "index.html" );  
})  
app.get('/login.html', function (req, res) {  
   res.sendFile( __dirname + "/" + "login.html" );  
})  
//////////


/* route to handle login and registration */
app.post('/api/register',registerController.register);
app.post('/api/authenticate',authenticateController.authenticate);
 
console.log(authenticateController);
app.post('/controllers/register-controller', registerController.register);
app.post('/controllers/auth-controller', authenticateController.authenticate);
app.listen(3000);
