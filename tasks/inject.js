/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var inject = require('gulp-inject');
var replace = require('gulp-replace');

gulp.task('inject-app', [ 'wiredep' ], function () {
    var sources = gulp.src([
        'app/app.mdl.js',
        'app/common/**/*.mdl.js',
        'app/core/**/*.mdl.js',
        'app/common/**/*.js',
        'app/core/**/*.js'
    ], { read: false });

    return gulp.src('./index.html')
        .pipe(inject(sources))
        .pipe(gulp.dest('./'))
});

