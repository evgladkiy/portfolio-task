var gulp = require('gulp'),
	cssmin = require('gulp-cssmin'),
	uglify = require('gulp-uglify'),
	autoprefixer = require('gulp-autoprefixer');

gulp.task('jsUglify', function() {
	gulp.src('./js/*.js')
    	.pipe(uglify());
});

gulp.task('cssMin', function(){
	gulp.src('./css/*.css')
		.pipe(autoprefixer())
		.pipe(cssmin());
});



