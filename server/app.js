var express=require('express');


var app=express();

//app.use(express.static('./server/'));

app.get('/', function(req, res){
	res.sendFile('index.html', {root: './'});
});

app.listen(5000, function(){

	console.log('Listening on port 5000');
});