/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var watch = require('gulp-watch');
var batch = require('gulp-batch');

gulp.task('watch', function () {
    watch([ 'scss/**/*.scss', 'app/**/*.scss' ], batch(function (events, done) {
        gulp.start('sass', done);
    }));

    // Add/Remove bower scripts/scss
    watch(['vendor/**/*.js', 'vendor/**/*.css', 'vendor/**/*.scss'], { events: [ 'add', 'unlink' ] }, batch(function (events, done) {
        gulp.start('wiredep-js', done);
        gulp.start('wiredep-sass', done);

    }));

    // Add/Remove script tags
    watch('app/**/*.js', { events: [ 'add', 'unlink' ] }, batch(function (events, done) {
        gulp.start('inject-app', done);
    }));
});