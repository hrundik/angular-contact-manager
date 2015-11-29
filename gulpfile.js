var gulp = require('gulp');
var del = require('del');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');
var path = require("path");
var Builder = require('systemjs-builder');

var SYSTEMJS_CONFIG = {
	packages: {
		'app': {defaultExtension: 'js'}
	},
	// keep angular2 external
	meta: {
		'angular2/angular2': {
		  build: false
		},
		'angular2/router': {
		  build: false
		}
	  }
};

var TARGET_DIR = 'build';

gulp.task('clean', function () {
	return del.sync([TARGET_DIR]);
});

gulp.task('build-ts', function () {
	var tsProject = ts.createProject('src/tsconfig.json');
	var tsResult = tsProject.src()
		.pipe(sourcemaps.init())
		.pipe(ts(tsProject));
		
	return tsResult.js
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(TARGET_DIR));
});

gulp.task('build-bundle', ['build-ts'], function (cb) {
	var builder = new Builder('build');
	builder.config(SYSTEMJS_CONFIG);
	builder
		.bundle('app/app', TARGET_DIR + '/bundle.js', { minify: true, sourceMaps: true})
		.then(function() {
		  console.log('Build complete');
		  cb();
		})
		.catch(function(err) {
		  console.log('Build error');
		  console.log(err);
		});
});

gulp.task('default', ['clean', 'build-bundle']);