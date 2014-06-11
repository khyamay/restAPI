var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Bear = require('./app/models/bear');

mongoose.connect('localhost');
app.use(bodyParser());



var port = process.env.PORT || 3000;


var router = express.Router();

router.use(function(req, res, next){
	console.log('Something is happening');
	next();
});

router.get('/', function(req, res){

   res.json({message: 'Welcome to our API'});
	
});

app.use('/api', router);




app.listen(port);
console.log('Magic happens on port' + port);
