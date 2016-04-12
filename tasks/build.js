/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var rename = require("gulp-rename");
var del = require('del');
var inject = require('gulp-inject');
var replace = require('gulp-replace');
var duration = require('gulp-duration');

gulp.task('copyfonts', function() {
    return gulp.src('./fonts/*')
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('clean-build', function() {
    return del(['build/js', 'build/css']);
});

gulp.task('inject-build', [ 'minify' ], function() {
    return gulp.src('./index.html')
        .pipe(inject(gulp.src(['./build/**/vendor*.js', './build/**/scripts*.js', './build/**/templates*.js'], {read: false}), {starttag: '<!-- inject:build:js -->'}))
        .pipe(inject(gulp.src('./build/**/*.css', {read: false}), {starttag: '<!-- inject:build:css -->'}))
        .pipe(gulp.dest('./'))
});
