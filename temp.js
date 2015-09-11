var gulp = require('gulp');
var construct = require('gulp-content-includer');
gulp.task('default', function() {
  // 将你的默认的任务代码放在这
});

gulp.task('construct',function() {
    gulp.src('src/page/**/*.html')
    	.pipe(construct({
          includerReg:/<!\-\-include\s+"([^"]+)"\-\->/g,
          type: 'html'
      }))
      .pipe(construct({
          includerReg:/<link\s+href\=+"([^"]+)"\s+rel="stylesheet"\/>/g,
          type: 'css'
      }))
      .pipe(construct({
          includerReg:/<script\s+src\=+"([^"]+)"><\/script>/g,
          type: 'js'
      }))
      .pipe(gulp.dest('./build'));
});