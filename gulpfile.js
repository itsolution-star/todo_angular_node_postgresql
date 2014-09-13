// Include gulp
var gulp = require('gulp');

// Include Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var coffee = require('gulp-coffee');

// Compile sass
gulp.task('sass', function() {
  return gulp.src('./public/styles/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/styles'));
});

// Compile coffeescript
gulp.task('compile-coffee', function() {
  return gulp.src('./public/js/coffee/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./public/js'));
});

// Concat and minify js
gulp.task('scripts', function() {
  return gulp.src('./public/js/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./public/js/dist'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/js/dist'));
});

// Watch
gulp.task('watch', function() {
  gulp.watch('./public/js/coffee/*.coffee', ['compile-coffee']);
  gulp.watch('./public/styles/scss/*.scss', ['sass']);
});

// Default tasks
gulp.task('default', ['sass', 'compile-coffee', 'scripts', 'watch']);