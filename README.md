## gulp-content-includer

a plugin for gulp.js to include files 

## Installation

```bash
npm install gulp-construct
```

## Options

### includerReg: RegExp of the include expression
Type: `RegExp` 

### baseSrc: basedir of the source
Type: `String` 

## Usage

```js
var gulp = require('gulp');
var contentInclude = require('gulp-construct');

gulp.task('construct',function() {
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
```
