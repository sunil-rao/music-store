var express=require('express');
var ejs=require('ejs');

var app=express();
app.set('views', ['server/views']);
app.set('view engine', 'ejs');

var router= express.Router();

router.get('', function(req, res) {
	res.render('index');
});



app.use('/', router);

app.listen(5000, function(){

	console.log('Listening on port 5000');
});