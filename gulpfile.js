var gulp=require('gulp');
var wiredep=require('wiredep').stream;
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

gulp.task('wire-bower-dep', function(){

	// console.log(config.index);
	// console.log(config.wiredepOptions);
	// console.log(config.views);

	return gulp.src(config.index)
		.pipe(wiredep(config.wiredepOptions))
		.pipe(gulp.dest(config.views));

});