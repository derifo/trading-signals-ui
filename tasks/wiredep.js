/**
 * Created by roeehershko on 1/9/16.
 */
var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var replace = require('gulp-replace');

gulp.task('wiredep-js', function () {
    return gulp.src('./index.html')
        .pipe(
            wiredep({
                directory: 'vendor'
            })
        )
        .pipe(replace('vendor/', '/vendor/'))
        .pipe(gulp.dest('./'));
});

gulp.task('wiredep-sass', function() {
    // You can use multiple globbing patterns as you would with `gulp.src`
    return gulp.src('./scss/style.scss')
        .pipe(wiredep({ directory: 'vendor' }))
        .pipe(gulp.dest('./scss'));
});

gulp.task('wiredep', [ 'wiredep-js', 'wiredep-sass' ]);