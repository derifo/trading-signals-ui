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

gulp.task('copyimg', function() {
    return gulp.src('./img/*')
        .pipe(gulp.dest('./build/img'));
});

gulp.task('copytemplates', function() {
    return gulp.src('./app/**/*.html')
        .pipe(gulp.dest('./build/app'));
});

gulp.task('clean-build', function() {
    return del(['build/js', 'build/css']);
});

gulp.task('inject-build', [ 'minify' ], function() {
    return gulp.src('./index.html')
        .pipe(inject(gulp.src(['./build/**/vendor*.js', './build/**/scripts*.js', './build/**/templates*.js'], {read: false}), {starttag: '<!-- inject:build:js -->'}))
        .pipe(inject(gulp.src('./build/**/*.css', {read: false}), {starttag: '<!-- inject:build:css -->'}))
        .pipe(replace(/<\!-- bower:js -->[\n\t\r\s\d\wa-zA-Z\<\>\"\=\/\.\-]{0,}<\!-- endbower -->[\s\t\n]{0,}/gm, ''))
        .pipe(replace(/<\!-- inject:js -->[\n\t\r\s\d\wa-zA-Z\<\>\"\=\/\.\-]{0,}<\!-- endinject -->[\s\t\n]{0,}/gm, ''))
        .pipe(replace('<link rel="stylesheet" href="/css/style.css">', ''))
        .pipe(replace('http://localhost:8000/', 'http://tradingsignals.mbtechnologyil.com/'))
        .pipe(replace('build/', ''))
        .pipe(gulp.dest('./build'))
});
