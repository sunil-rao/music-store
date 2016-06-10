var express=require('express');
var musicRouter=require('./routes/musicRouter');

var app=express();
app.set('views', ['server/views']);
app.set('view engine', 'ejs');



app.use('/static/css', express.static('./bower_components/bootstrap/dist/css'));
app.use('/static/js', express.static('./bower_components/bootstrap/dist/js'));
app.use('/music', musicRouter);

app.listen(5000, function(){
console.log(__dirname);
	console.log('Listening on port 5000');
});