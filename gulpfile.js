'use strict'

const gulp = require('gulp');
const babel = require("gulp-babel");

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const clean = require('gulp-clean');
const browserSync = require('browser-sync').create(), //自动刷新
    reload = browserSync.reload;
const webpack = require('webpack-stream');

const sass = require('gulp-sass');

// scss文件编译成css
gulp.task('sass', function () {
    gulp.src('src/css/tip.scss')
        .pipe(sass())
        .pipe(gulp.dest('dist/css'));
});

gulp.task('babel', function () {
    return gulp.src('src/js/bundle/xInput.js')
        .pipe(babel())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('uglify', function () {
    return gulp.src('dist/js/xInput.js')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'));
});

gulp.task('clean', function () {
    return gulp.src('dist/js/*.js')
        .pipe(clean());
});
// js模块化处理 
gulp.task('bundle', function () {
    return gulp.src('src/js/xInput.js')
        .pipe(webpack({
            output: {
                filename: 'xInput.js'
            },
            mode: 'development'
        }))
        .pipe(gulp.dest('src/js/bundle'));
});

//监控改动并自动刷新任务;
gulp.task('watcher', function () {
    gulp.watch('src/js/*.js', ['bundle', 'babel']);
    gulp.watch(['src/js/*.js', 'src/css/*.scss', '*.html']).on('change', reload);
});

// 创建本地服务器，并实时更新页面
gulp.task('serve', function () {

    browserSync.init({
        // https: 'https',
        port: 3000,
        // browser: ["google chrome"],
        server: {
            baseDir: './',
            index: 'index.html'
        }
    });

});

gulp.task('dev', ['serve', 'sass', 'bundle', 'babel', 'watcher']);
gulp.task('build', ['clean', 'bundle', 'babel', 'sass', 'uglify']);
gulp.task('default', ['serve']);
