// Browser-sync
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();


// Misc
var uglify = require('gulp-uglify'),
	conv_sass = require('gulp-ruby-sass'),
	sass = require('gulp-sass'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer');

// Function to console.log Errors
function errorLog(error){
	console.error.bind(error);
	this.emit('end');
}


// Misc
// Minify JS
gulp.task('scripts', function (){
 // gulp.src('js/*.js')
	gulp.src('js/abc.js')
	gulp.src('js/snow.js')
	gulp.src('js/abc.js')

		.on('error', errorLog)
		.pipe(uglify())
		.pipe(gulp.dest('build/js'));
});


// Misc
// Sass to CSS + minify
gulp.task('conv_sass', function () {
  return conv_sass('scss/*.scss')
  	
  	.pipe(sass({ 
  		outputStyle: 'compressed'   // minify
  	 }))
    
    .on('error', errorLog)           // show errors

    .pipe(prefix('last 6 versions')) // prefix makes scss compatible to older browsers (eg last 6 versions)
    
    .pipe(gulp.dest('build/css'))     // write to css folder
    .pipe(livereload());
});

// Misc
// Minify Images
gulp.task('imagemin', function (){
	gulp.src('images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('build/images'));
});





// Browser-sync
// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./build"
    });

    gulp.watch("scss/*.scss", ['sass']);
    gulp.watch("js/*.js", ['scripts']);
    gulp.watch("build/*.html").on('change', browserSync.reload);
});

// Browser-sync
// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("build/css"))
        .pipe(browserSync.stream());
});



// Run
gulp.task('default',['scripts','conv_sass','imagemin','serve']);

