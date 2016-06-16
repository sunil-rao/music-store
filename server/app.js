var express=require('express');
var musicRouter=require('./routes/musicRouter');
var signinRouter=require('./routes/signinRouter');

var app=express();
app.set('views', ['server/views']);
app.set('view engine', 'ejs');


app.use('/bower_components', express.static('./bower_components'));
app.use('/music', musicRouter);
app.use('/signin', signinRouter);

app.get('/', function(req, res){
	res.redirect('/music');
});


app.listen(5000, function(){
console.log(__dirname);
	console.log('Listening on port 5000');
});