/*jslint node:true */
(function () {
    'use strict';

    var gulp = require('gulp'),
        jade = require('gulp-jade'),

        paths = {
            libraries: {
                files: [
                    "node_modules/framework7/dist/js/framework7.min.js",
                    "node_modules/framework7/dist/js/framework7.min.js.map",
                    "node_modules/framework7/dist/css/framework7.min.css"
                ]
            },
            source: {
                root: "src"
            },
            dist: {
                root: "www"
            }
        };

    gulp.task('libraries', function () {
        return gulp.src(paths.libraries.files)
            .pipe(gulp.dest(paths.dist.root + '/lib'));
    });

    gulp.task('templates', function () {
        return gulp.src(paths.source.root + '/**/*.jade')
            .pipe(jade())
            .pipe(gulp.dest(paths.dist.root));
    });

    gulp.task('scripts', function () {
        return gulp.src(paths.source.root + '/**/*.js')
            .pipe(gulp.dest(paths.dist.root));
    });

    gulp.task('default', ['libraries', 'templates', 'scripts']);
}());