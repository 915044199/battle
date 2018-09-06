const gulp=require("gulp");
const sass=require("gulp-sass");
const connect=require("gulp-connect");
const concat=require("gulp-concat");
const uglify=require("gulp-uglify");
const rename=require("gulp-rename");
var imagemin = require('gulp-imagemin'); 
const cleanCss=require("gulp-clean-css");
const babel=require("gulp-babel");
//gulp.task("hello",function(){
//	console.log("hello world!");
//})
//gulp.task("hello2",function(){
//	console.log("helloooo world!");
//})
//gulp.task("default",function(){
//	console.log("111");
//})
//gulp.task("default",["hello","hello2"]);
gulp.task("copy-index",function(){ 
	//gulp.src()找到我们的index.html然后使用.pipe()通道 
	//gulp.dest()发布拷贝 
	gulp.src('index.html')
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());

 });
gulp.task("sass",function(){
	gulp.src("index.scss").pipe(sass()).pipe(gulp.dest("dist/css"));
 })
//gulp.task("sever",function(){
// 	connect.server({root:"dist"});
// })
gulp.task("sever",function(){
   	connect.server({
   		root:"dist",
   		livereload:true
   	});
   })
gulp.task("watch",function(){
   	gulp.watch("index.html",["copy-index"]);
   })
gulp.task("default",["sever","watch"]);
//gulp.task("concat",function(){
// 	gulp.src(["a.js","b.js"])
// 	.pipe(concat("c.js"))
// 	.pipe(gulp.dest("dist/js"))
// 	.pipe(uglify())
// 	.pipe(rename("c.min.js"))
// 	.pipe(gulp.dest("dist/js"));
//})
////gulp.task("default", function () {  
//      gulp.src("es6.js")  
//        .pipe(babel({"presets":["es2015"]}))  
//        .pipe(gulp.dest("lib"));  
//});
//gulp.task('images',function(){
//      gulp.src('img/*') 
//		.pipe(imagemin()) 
//		.pipe(gulp.dest('dist/img'))
// }) 
