var gulp = require("gulp")
    stylus = require("gulp-stylus")


gulp.task('stylus', function () {
    gulp.watch('Archivo a ver', {ignoreInitial : false}, function (css) {
        gulp.src("Archivo a Compilar")
        .pipe(stylus())
        .pipe(gulp.dest("carpeta en donde se va a compilar"))
        css()
    });
});
