'use strict';

var fs      = require('fs'),
gulp = require('gulp'),
browserSync = require('browser-sync').create();

require('gulp-task-loader-recursive')(gulp);

// Watch
gulp.task('watch', function () {
    // Static Server + watching scss/html files
    browserSync.init({
        proxy: {
            target: "http://127.0.0.1:8000/"
        }
    });
    gulp.watch('public/css/bundle.css').on('change', browserSync.reload)
    gulp.watch('./*.html').on('change', browserSync.reload)
    gulp.watch('resources/assets/scss/**/*.scss', ['build:css'])
});

gulp.task('default', [ 'watch', 'build:css' ]);