## gulp-construct

concat the css, js and html to construct a html

## Installation

```bash
npm install gulp-construct
```

## Usage

```js
var gulp = require('gulp');
var construct = require('gulp-construct');

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
```
