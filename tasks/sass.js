/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass',  function () {
    return gulp.src([ 'scss/style.scss', 'scss/login.scss' ])
        .pipe(sass().on('error', function(err) {
            console.log(err);
        }))
        .pipe(gulp.dest('css'));
});