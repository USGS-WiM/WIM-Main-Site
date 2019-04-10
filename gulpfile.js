var gulp = require('gulp');
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
var twig = require('gulp-twig');

var folder = {
    src: 'app/',
    dev: 'dev/',
    build: 'build/'
}


// Development
// Development
// Development
// Development
// Development
// Dev
// Dev
// Dev
// Dev

// Clean Dev Folder
gulp.task('clean:dev', function () {
    return del.sync('folder.dev');
})

// Move static files
var devFiles = [
    folder.src + 'src/js/**/*',
    folder.src + 'src/images/**/*',
    folder.src + 'styleguide.css',
    folder.src + 'manifest.json'
];
gulp.task('staticdev', function () {
    gulp.src(devFiles, { base: folder.src })
        .pipe(gulp.dest(folder.dev));
});

// Compile Twig Templates
gulp.task('twigdev', function () {
    return gulp.src([ folder.src + '**/*.html'])
        .pipe(twig())
        .pipe(gulp.dest(folder.dev))
        .pipe(browserSync.stream());
});

// Compile less
gulp.task('lessdev', function () {
    gulp.src(folder.src + 'src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest(folder.dev))
        .pipe(browserSync.stream());
});

// Move JS on Change
gulp.task('jsdev', function () {
    gulp.src(folder.src + 'src/js/**/*', { base: folder.src })
        .pipe(gulp.dest(folder.dev));
});

// Browsersync
// Serve from Dev
gulp.task('browsersync', function () {
    browserSync.init({
        server: folder.dev
    });
    gulp.watch(folder.src + "src/less/**/*.less", ['lessdev']);
    gulp.watch(folder.src + "**/*.html", ["twigdev"]);
    gulp.watch(folder.src + "**/*.js", ["jsdev"]).on("change", reload);
});

// Default serve sequence
gulp.task('serve', function (callback) {
    runSequence(
        'staticdev',
        'twigdev',
        'lessdev',
        'browsersync',
        callback
    )
})

// Default Task
gulp.task('default', ['serve']);




// Build sequence
// Build sequence
// Build sequence
// Build sequence
// Build sequence

// Clean build folder
gulp.task('clean:build', function () {
    return del.sync(folder.build);
})

// Move static files
var staticFiles = [
    folder.src + '/src/js/**/*',
    folder.src + 'styleguide.css',
    folder.src + 'manifest.json'
];
gulp.task('buildstatic', function () {
    gulp.src(staticFiles, { base: folder.src })
        .pipe(gulp.dest(folder.build));
});

gulp.task('lessbuild', function () {
    gulp.src(folder.src + 'src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest(folder.build))
});

// image processing
gulp.task('images', function () {
    var out = folder.build + 'src/images/';
    return gulp.src(folder.src + 'src/images/**/*')
        .pipe(newer(out))
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(out));
});


// Compile Twig templates to HTML
gulp.task('twigbuild', function () {
    return gulp.src([folder.src + '**/*.html'])
        .pipe(twig())
        .pipe(gulp.dest(folder.build))
});

// Clean first, then the rest
gulp.task('build', function (callback) {
    runSequence(
        'clean:build',
        ['buildstatic', 'lessbuild'],
        // 'images',
        'twigbuild',
        callback
    )
})

// Serve From Build
gulp.task('serve-build', function () {
    browserSync.init({
        server: folder.build
    });
});