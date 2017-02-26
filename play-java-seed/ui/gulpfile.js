'use strict';

var watchify = require('watchify');
var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var assign = require('lodash.assign');
var babel = require('gulp-babel');
var fs = require('fs');
var mkdirp = require('mkdirp')

// add custom browserify options here
var customOpts = {
  entries: ['./app/assets/javascript/index.jsx'],
    debug: true,
    cache: {},
    packageCache: {},
    fullPaths: true
};
var opts = assign({}, watchify.args, customOpts);
var browserify = browserify(opts)
                 .transform("babelify", {
                     presets: ["es2015", "react"],
                     plugins: ["transform-object-rest-spread"]
                 });
var watch = watchify(browserify);

var outputDir = '../target/gulp/app/assets/javascript'
mkdirp.sync(outputDir);


gulp.task('js', watchTask); // so you can run `gulp js` to build the file
watch.on('update', watchTask); // on any dep update, runs the bundler
watch.on('log', gutil.log); // output build logs to terminal

function runTask(bundler) {
  return bundler.bundle()
    // log errors if they happen
    .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(fs.createWriteStream(outputDir + '/index.js'))
        .on('finish', function() { console.log('Ran browserify and wrote output'); });
    // optional, remove if you don't need to buffer file contents
        // .pipe(buffer())
        // .pipe(babel({
        //     presets: ['es2015', 'stage0']
        // }))
    // optional, remove if you dont want sourcemaps
    // .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
       // Add transformation tasks to the pipeline here.
    // .pipe(sourcemaps.write('./')) // writes .map file
    // .pipe(gulp.dest('./dist'));
}

gulp.task('default', watchTask);

gulp.task('browserify', browserifyTask);

gulp.task('clean', function ( ) {
    console.log('Not removing anything');
});

function watchTask() {
    runTask(watch);
}

function browserifyTask() {
    runTask(browserify);
}

gulp.task('watch',
          ['browserify'],
          watchTask
         );



