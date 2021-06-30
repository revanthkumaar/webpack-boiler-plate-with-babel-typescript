const gulp = require('gulp')
const browserify = require('browserify')
const babelify = require('babelify')
const source = require('vinyl-source-stream')
const run = require('gulp-run');
const AWS = require('aws-sdk')
const runSequence = require('run-sequence')

const paths = {
    main_js: ['src/App.tsx']
}

gulp.task('bundlejs', bundleJSinLocal);
gulp.task('build-react',buildReact)
gulp.task('copy-to-bucket', copyToS3Bucket)
gulp.task('deploy', function(){
    runSequence('bundlejs','build-react', 'copy-to-bucket')
})


function bundleJSinLocal() {
    //Browserify bundles the JS.
    return browserify(paths.main_js)
    .transform(babelify) //———–> transpiles es6 to es5
    .bundle()
    .on('error', (err)=>{
    console.log('js error', err);
    })
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('static/js'));
}


function buildReact() {
    return run("npm run build").exec()
}

function copyToS3Bucket(){
    const pathToS3Bucket = "s3:akdjhasd.com"
    const publishPackageCommand = "aws s3 cp |path-to-localbuild-folder| |pathToS3Bucket| --recursive"
    return run(publishPackageCommand)
}




