var gulp = require("gulp"),
	uglify = require("gulp-uglify"),
	concat = require("gulp-concat");

gulp.task("default", function() {

});

gulp.task('minify', function() {
	gulp.src(['js/jquery.js', 'js/testMinify.js', 'js/test2.js'])
		.pipe(uglify())
		.pipe(concat('min.js'))
		.pipe(gulp.dest('buld'))
});
gulp.task('watch', function(){
	gulp.watch('js/*.js', ['minify']);
});