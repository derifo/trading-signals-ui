/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var angularTemplates = require('gulp-angular-templates');
var concat = require('gulp-concat');
var uglify = require('gulp-uglifyjs');

gulp.task('minify-html', function () {
    var surfix = Math.round((new Date()).getTime() / 1000);

    return gulp.src('app/**/*.html')
        .pipe(angularTemplates({ module: 'app', basePath: '/app/' }))
        .pipe(concat('templates' + surfix + '.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});