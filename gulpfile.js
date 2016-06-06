var gulp=require('gulp');
var config=require('./gulpConfig');

//Starts server each time a file changes
gulp.task('start-server', function(){

	var nodemon=require('gulp-nodemon');

	return nodemon({

		script: config.files.index,
		watch: config.files.allJsFiles,
		delay: 1
	})
	.on('start', function(){
			console.log('Starting server....');
		});
});