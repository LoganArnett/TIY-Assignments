var gulp = require('gulp'),
    gutil = require('gulp-util'),
    mocha = require('gulp-mocha'),
    _ = require('lodash');

var config = {
  name: 'David',
  otherStuff: 'Do Not Care'
}

gulp.task('default', function() {
  console.log(config.name);

});
