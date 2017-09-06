var gulp = require('gulp'),
browserSync = require('browser-sync')
module.exports = gulp;

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
    startPath: "home.html",
        server: {
            baseDir: "./",
            directory: true
        }
    });
});

gulp.task('bs-reload', function() {
    browserSync.reload();
});

gulp.task('default', ['browser-sync'], function() {
    gulp.watch("*.html", ['bs-reload']);
});

