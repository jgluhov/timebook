gulp = require 'gulp'
stylus = require 'gulp-stylus'
nib = require 'nib'
sourcemaps = require 'gulp-sourcemaps'
concat = require 'gulp-concat'
uglify = require 'gulp-uglify'

gulp.task 'styles', ->
  gulp.src('src/styles/*.styl')
    .pipe(stylus(use: [nib()], compress: on, import: 'nib'))
    .pipe(sourcemaps.init())
    .pipe(concat('styles.min.css'))
    .pipe(gulp.dest('public/css'))

gulp.task 'scripts', ->
  gulp.src('src/scripts/*.js')
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))

gulp.task 'default', ['scripts','styles'], ->
  gulp.watch('src/scripts/*.js', ['scripts'])
  gulp.watch('src/styles/*.styl', ['stylus'])