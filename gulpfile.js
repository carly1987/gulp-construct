var gulp = require('gulp');
var contentIncluder = require('gulp-content-includer');
var rename = require('gulp-rename');
var insert = require('gulp-insert');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

gulp.task('concat',function() {
    gulp.src('src/page/**/*.html')
    	.pipe(contentIncluder({
          includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
          type: 'html'
      }))
      .pipe(contentIncluder({
          includerReg:/<link\s+href\=+"([^"]+)"\s+rel="stylesheet"\/>/g,
          type: 'css'
      }))
      .pipe(contentIncluder({
          includerReg:/<script\s+src\=+"([^"]+)"><\/script>/g,
          type: 'js'
      }))
      .pipe(gulp.dest('./build'));
});