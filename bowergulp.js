/*gulpfile with livereload */
var gulp = require('gulp'),
    wiredep = require('wiredep');

gulp.task('wiredep', function(){
  wiredep({src: 'index.html' });
});

gulp.task('bower', function(){
  gulp.watch('bower.json', ['wiredep']);
});


gulp.task('default', ['bower']);
