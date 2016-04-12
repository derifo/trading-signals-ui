/**
 * Created by roeehershko on 1/9/16.
 */
var minifyCss = require('gulp-minify-css');
var gulp = require('gulp');
var rename = require("gulp-rename");

gulp.task('minify-css', function() {
    return gulp.src([ 'css/style.css' ])
        .pipe(minifyCss())
        .pipe(rename({
            basename: "style",
            suffix: Math.round((new Date()).getTime() / 1000)
        }))
        .pipe(gulp.dest('build/css'));
});