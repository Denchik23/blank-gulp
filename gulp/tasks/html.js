const gulp = require('gulp')

module.exports = function html() {
    return gulp.src('src/index.html').pipe(gulp.dest('build'))
}

