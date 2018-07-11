const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const less = require('gulp-less');


gulp.task('compile-sass-bootstrap', function(){
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
                .pipe(sass())
                .pipe(gulp.dest('src/css'))
                .pipe(browserSync.stream());
});
gulp.task('move-js', function(){
        return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js',
        'node_modules/tether/dist/js/tether.min.js', 'node_modules/jquery/dist/jquery.min.js'])
        .pipe(gulp.dest('src/js'))
        .pipe(browserSync.stream());
});


//less
gulp.task('less', function(){
    gulp.src('src/less/*.less')
        .pipe(less())
        .pipe(gulp.dest('src/css'))
        .pipe(browserSync.stream());
});

//Watch and Serrve
gulp.task('serve',['less', 'compile-sass-bootstrap','move-js'], function(){
   browserSync.init({
       server: './src'
   });

   gulp.watch(['src/less/*.less'], ['less']);
   gulp.watch('src/*.html').on('change', browserSync.reload);
});
//Default
gulp.task('default', ['serve']);