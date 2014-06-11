var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

var port = process.env.PORT || 3000;


var router = express.Router();

router.get('/', function(req, res){

   res.json({message: 'Welcome to our API'});
	
});

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port' + port);
