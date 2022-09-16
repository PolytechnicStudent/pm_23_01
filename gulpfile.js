function simpleTask() {
console.log ('This is a test task!');
}
exports.default = simpleTask

const { src, dest, watch, series } = require ("gulp");
const concat = require ("gulp-concat");
//const sass = require ("gulp-sass");
const autoprefixer = require ("gulp-autoprefixer");
const cssnano = require ("gulp-cssnano");
const rename = require ("gulp-rename");
const uglify = require ("gulp-uglify");
//const imagemin = require ("gulp-imagemin");

function task_html () {
return src ( "app/*.html")
.pipe (dest ( "dist"));
}
exports.html = task_html




function task_imgs() {
return src ( "app/img/*.+(jpg|jpeg|png|gif)")
.pipe (imagemin ({
progressive: true,
svgoPlugins: [{removeViewBox: false}],
interlaced: true
}))
.pipe (dest ("dist/images"))
}
exports.imgs = task_imgs


exports.build = series(task_html, task_imgs)
