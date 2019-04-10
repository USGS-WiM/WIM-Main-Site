var gulp = require('gulp');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var less = require('gulp-less');
var browserSync = require("browser-sync").create();
var reload = browserSync.reload;
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');


var folder = {
    src: 'app/',
    build: 'build/'
}


// Minify CSS and JS
gulp.task('useref', function () {
    return gulp.src('app/*.html')
        .pipe(useref())
        // Minifies only if it's a JavaScript file
        .pipe(gulpIf('*.js', uglify({ mangle: false }).on('error', function (e) {
            console.log(e);
        })))
        // Minifies only if it's a CSS file
        .pipe(gulpIf('*.css', cssnano()))

        .pipe(gulp.dest('build'))
});


// Clean build folder
gulp.task('clean:dist', function () {
    return del.sync('build');
})

// Move static files
var filesToMove = [
    './app/error/**/*',
    './app/projects/**/*',
    './app/team/**/*',
    './app/styleguide.css',
    './app/manifest.json'
];
gulp.task('static', function () {
    gulp.src(filesToMove, { base: './app/' })
        .pipe(gulp.dest('build'));
});

// image processing
gulp.task('images', function () {
    var out = folder.build + 'src/';
    return gulp.src(folder.src + 'src/**/*')
        .pipe(newer(out))
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(out));
});




////////////////////
// Build sequence //
////////////////////

// Clean first, then the rest
gulp.task('build', function (callback) {
    runSequence(
        'clean:dist',
        ['useref', 'static', 'images'],
        callback
    )
})


// Browsersync
// Watch for less changes
// Compile less on save
// inject CSS to browser
// Live reload for HTML and JS
gulp.task('compile-less', function () {
    gulp.src('./app/less/main.less')
        .pipe(less())
        .pipe(gulp.dest('./app/'))
        .pipe(browserSync.stream());
});


// Serve from Dev
gulp.task('serve', function () {
    // Serve files from the root of this project
    browserSync.init({
        server: "./app/"
    });
    gulp.watch("app/less/**/*.less", ['compile-less']);
    gulp.watch("./app/**/*.html").on("change", reload);
    gulp.watch("./app/**/*.js").on("change", reload);
});


// Default Task
// When running `gulp` in the terminal
gulp.task('default', ['serve']);


// Serve From Build
gulp.task('serve-build', function () {

    // Serve files from the root of this project
    browserSync.init({
        server: "./build/"
    });

});