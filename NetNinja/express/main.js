var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

// ejs
app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));

//app.use('/assets', function(req, res, next){
// 	console.log(req.url);
// 	next();
//});


app.get('/', function(req, res){

	res.render('index');
});

app.get('/contact', function(req, res){
	res.render('contact', {qs: req.query});

});
app.post('/contact', urlencodedParser, function(req, res) {
	console.log(req.body);
	// if (!req.body) return res.sendStatus(400)
	res.render('contact-success', {data: req.body});
})


app.get('/profile/:name', function(req, res) {
	var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};

	res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);
