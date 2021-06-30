const gulp = require('gulp')
const browserify = require('browserify')
var babelify = require('babelify')
var source = require('vinyl-source-stream')

var paths = {
    main_js: ['src/app.tsx']
}

gulp.task('js',function(){
    return browserify(paths.main_js).transform(babelify).bundle().on('error',(err) => {console.log(err)})
    .pipe(source(bundle.js)).pipe(gulp.dest('static/js'))
})

