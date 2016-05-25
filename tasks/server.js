/**
 * Created by shani on 12/04/2016.
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');

gulp.task('serve', function() {
    gulp.src('./')
        .pipe(webserver({
            fallback: 'index.html',
            host: "localhost",
            port: 3000
        }));
});