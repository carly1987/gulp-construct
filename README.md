## gulp-construct

concat the css, js and html to construct a html

## Installation

```bash
npm install gulp
npm install gulp-construct
```

## Usage
在根目录创建gulpfile.js，代码如下

```js
var gulp = require('gulp');
var construct = require('gulp-construct');

gulp.task('construct',function() {
    gulp.src('src/**/*.html')
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
src/example/index.html， 代码如下

```html
<!--include "./header.html"-->
<link href="src/example/css/index.css" rel="stylesheet"/>
</head>
<body>
<script src="src/example/js/index.js"></script>
<!--include "./footer.html"-->
```
