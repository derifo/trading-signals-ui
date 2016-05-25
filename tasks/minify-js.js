/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var uglify = require('gulp-uglifyjs');
var rename = require("gulp-rename");
var ngAnnotate = require('gulp-ng-annotate');
var mainBowerFiles = require('main-bower-files');
var gulpFilter = require('gulp-filter');
var concat = require('gulp-concat');
var through2 = require('through2');

gulp.task('minify-vendor', function() {

    return gulp.src(mainBowerFiles())
        .pipe(gulpFilter(['angular.js', 'angular-*.js', '*.js']))
        .pipe(concat('vendors.js'))
        // .pipe(uglify())
        .pipe(rename({
            basename: "vendors",
            suffix: Math.round((new Date()).getTime() / 1000)
        }))
        .pipe(gulp.dest('build/js'));

});

gulp.task('minify-app', function() {

    return gulp.src([
        'app/app.mdl.js',
        'app/common/**/*.mdl.js',
        'app/core/**/*.mdl.js',
        'app/common/**/*.js',
        'app/core/**/*.js'
    ])
        .pipe(ngAnnotate())
        .pipe(concat('scripts.js'))
        //.pipe(uglify())
        .pipe(rename({
            basename: "scripts",
            suffix: Math.round((new Date()).getTime() / 1000)
        }))
        .pipe(gulp.dest('build/js'));
});