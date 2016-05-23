/**
 * Created by shani on 12/04/2016.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html',
            host: "10.0.0.32",
            port: 3000
        }));
});