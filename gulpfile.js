const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const pump = require("pump");
const clean = require('gulp-clean');
function watch(){
    browserSync.init({
        server:{
            baseDir: './'
        }
    })
    gulp.watch('*.css').on('change', browserSync.reload);
    gulp.watch('./*.html' ).on('change', browserSync.reload);
    gulp.watch('*.js').on('change', browserSync.reload);

}
exports.watch = watch;
function sass_toCSS_task(cb) {
    pump([

        gulp.src("sass/*.scss"),//створюємо потік
        sass().on('error', sass.logError),//перекомпільовуємо scss у css
        gulp.dest("css/")//куди копіюємо 
    ],
        cb
    );
}
    exports.sassToCSS = sass_toCSS_task;