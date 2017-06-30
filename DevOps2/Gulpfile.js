var gulp = require('gulp'),
browserSync = require('browser-sync')
// ,
// compass = require('gulp-compass');
module.exports = gulp;

// browser-sync task for starting the server.
gulp.task('browser-sync', function() {
    browserSync({
    startPath: "index.html",
        server: {
            baseDir: "./",
            directory: true
        }
    });
});
// gulp.task('compass', function() {
//   gulp.src('design/css/*.scss')
//     .pipe(compass({
//       css: 'design/css',
//       sass: 'design/css'
//     }).on("error",function(err){
//         console.log("Error at scss file"+ err);
//     })
//     )
//     .pipe(gulp.dest('app/assets/temp'))
//     .pipe(browserSync.reload({stream:true}));
// });

gulp.task('bs-reload', function() {
    browserSync.reload();
});
// Default task to be run with `gulp`
// gulp.task('default', ['compass', 'browser-sync'], function() {
//     gulp.watch("design/css/*.scss", ['compass']);
//     gulp.watch(["design/css/*.css","design/templates/*.html"], ['bs-reload']);
// });


gulp.task('default', ['browser-sync'], function() {
    gulp.watch("*.html", ['bs-reload']);
});

