const gulp = require('gulp')
const browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')

var paths = {
    main_js: ['src/app.tsx']
}

gulp.task('js', function() {
//Browserify bundles the JS.
return browserify(paths.main_js)
.transform(babelify) //———–> transpiles es6 to es5
.bundle()
.on('error', (err)=>{
console.log('js error', err);
})
.pipe(source('bundle.js'))
.pipe(gulp.dest('static/js'));
});

