var express=require('express');
var router=require('./routes/musicRouter');

var app=express();
app.set('views', ['server/views']);
app.set('view engine', 'ejs');

app.use('/', router);

app.listen(5000, function(){

	console.log('Listening on port 5000');
});