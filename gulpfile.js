var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require('gulp-notify');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var image = require('gulp-image');


gulp.task('script', function(){
	//aca va la tarea
	gulp.src('src/js/custom.js')
	//unir todos los archivos
	.pipe(concat('script.min.js'))
	//enferlo(miniizarlo)
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));//para dejarlo en esa carpeta
});

gulp.task('style', function(){
	//aqui va la tarea
	gulp.src('src/sass/style.scss')//transformar los sass
	.pipe(sass().on('error', sass.logError))//para que avise errores mas explicitos
	//minimizarlo
	.pipe(minifyCSS())
	//dejar en archivo de destino
	.pipe(concat('style.min.css'))
	//dejar en carpeta
	.pipe(gulp.dest('dist/css'))

});
gulp.task('image', function() {
     gulp.src('docs/**/*.{jpg,jpeg,gif,png,svg}')
   .pipe(gulp.dest('dist/img'));// tarea images
});

//var notify = require('gulp-')
gulp.task('fonts', function(){
	gulp.src('src/fonts/*')//toma todo lo que esta dentro
	.pipe(gulp.dest('dist/fonts'));//deja todo lo que tome
});
//agregando el html a dist
gulp.task('html', function(){
  return gulp.src('index.html')
    .pipe(gulp.dest('dist'))
});
//agregando el css al html
gulp.task('html', ['style'], function(){
  var injectFiles = gulp.src(['dist/style.min.css']);
 
  return gulp.src('index.html')
    .pipe(inject(injectFiles))
    .pipe(gulp.dest('dist'));
});
gulp.task('default',['script','style', 'fonts', 'image']);

gulp.task('watch', function (){
	gulp.watch('src/js/*.js', function(){
	});
});	