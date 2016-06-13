var views='./server/views/';
var config={

	files: {

		allJsFiles: ['./server/'],
		index: './server/app.js'
	},

	wiredepOptions: {
		bowerJson: require('./bower.json'),
		directory: './bower_components',
		onError: function(err){
			console.log(err);
		},
		overrides: {
		    "bootstrap":{
		      "main": [
		        "dist/css/bootstrap.css",
		        "dist/js/bootstrap.js"
		      ]
		    }
  		}
	},
	index: views + 'index.ejs',
	views: views
};

module.exports=config;