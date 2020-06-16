var gulp = require("gulp")
    stylus = require("gulp-stylus")


gulp.task('stylus', function () {
    gulp.watch('prepros/stylus/**/*.styl', {ignoreInitial : false}, function (css) {
        gulp.src("prepros/stylus/index.styl")
        .pipe(stylus())
        .pipe(gulp.dest("css"))
        css()
    });
});
