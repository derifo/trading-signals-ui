 /**
 * Created by roee on 10/08/15.
 */

// Include gulp
var gulp = require('gulp');
var requireDir = require('require-dir');
var dir = requireDir('./tasks');


gulp.task('minify', [ 'clean-build', 'minify-html', 'minify-vendor', 'minify-app', 'minify-css' ]);
gulp.task('build', [ 'minify', 'copyfonts', 'copyimg', 'copytemplates', 'inject-build' ]);
gulp.task('fix-index', [ 'inject-app', 'wiredep' ]);
gulp.task('server', [ 'serve', 'watch' ]);