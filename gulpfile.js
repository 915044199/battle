//const gulp=require("gulp");
//const sass=require("gulp-sass");
//gulp.task("sass",function(){
//	gulp.src("sass/*.scss")
//	.pipe(sass())
//	.pipe(gulp.dest("dist/css"));
//})
////gulp.task("babel",function(){
////	gulp.src("js/*.js")
////	.pipe(babel())
////	.pipe(gulp.dest("dist/js"));
////});
//gulp.task("watch",function(){
//	gulp.watch("sass/*.scss",["sass"]);
//})
//gulp.task("default",["watch"]);
const gulp = require("gulp"); //gulp环境
const sass = require("gulp-sass"); //编译sass
const connect = require("gulp-connect"); //插件搭建本地服务
const concat = require("gulp-concat"); //合并文件
const uglify = require("gulp-uglify"); //文件压缩js
const rename = require("gulp-rename"); //保留前后压缩文件，改名
const cleancss = require("gulp-clean-css"); //压缩css
const imagemin = require("gulp-imagemin"); //压缩图片
const babel = require("gulp-babel"); //es6转es5
const sourcemaps = require("gulp-sourcemaps"); //在浏览器中显示源码scss文件，而非转成的CSS文件

gulp.task("sever", function () {
    connect.server({
        root: "dist",
        livereload: true
    });
});
gulp.task("copy-index", function () {
    gulp.src("index.html").pipe(gulp.dest("dist"))
    .pipe(connect.reload())
});
gulp.task("sass", function () {
    gulp.src("sass/*.scss")
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"));
});
gulp.task("watch",function(){
    gulp.watch("index.html",["copy-index"]);
    gulp.watch("sass/*.scss",["sass"]);
});
gulp.task("default",["sever","watch"]);