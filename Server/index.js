var express=require("express");
var bodyParser=require('body-parser');
var connection = require('./config');
const cors = require('cors');

var app = express();
const { frontendBaseUrl } = require('./app/config');







const port = process.env.PORT || 3000;
app.listen(port);
console.log('API server started on: ' + port);

//parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: [frontendBaseUrl], credentials: true }));




//Routes
var userRoutes = require('./app/routes/userRoutes');
var corpusRoutes = require('./app/routes/corpusRoutes');
var lineRoutes = require('./app/routes/lineRoutes');
userRoutes(app);
corpusRoutes(app);
lineRoutes(app);

module.exports = app;




