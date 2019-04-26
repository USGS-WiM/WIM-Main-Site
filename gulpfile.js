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
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var inject = require('gulp-inject-string');


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

// Clean Dev Folder
gulp.task('clean:dev', function () {
    return del.sync(folder.dev);
})

// Move static files
var devFiles = [
    folder.src + 'src/repos.json',
    folder.src + 'src/repos2.json',
    folder.src + 'src/js/**/*',
    folder.src + 'src/images/**/*',
    folder.src + 'src/publicsans/**/*',
    folder.src + 'styleguide.css',
    folder.src + 'manifest.json'
];
gulp.task('staticdev', function () {
    return gulp.src(devFiles, { base: folder.src })
        .pipe(gulp.dest(folder.dev))
        .pipe(browserSync.stream());
});

// Compile Twig Templates
gulp.task('twigdev', function () {
    return gulp.src([folder.src + '**/*.html'])
        .pipe(twig())
        .pipe(gulp.dest(folder.dev))
        .pipe(browserSync.stream());
});

// Compile less
gulp.task('lessdev', function () {
    return gulp.src(folder.src + 'src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest(folder.dev + 'src/'))
        .pipe(browserSync.stream());
});

// Changes to JS or other (image) files in /src folder
gulp.task('staticchange', function () {
    gulp.src(folder.src + 'src/**/*', { base: folder.src })
        .pipe(gulp.dest(folder.dev))
        .pipe(browserSync.stream());
});

// Browsersync
// Serve from Dev
gulp.task('browsersync', function () {
    browserSync.init({
        server: folder.dev
    });

    gulp.watch(folder.src + "src/less/**/*.less", ['lessdev']);
    gulp.watch(folder.src + "**/*.html", ["twigdev"]);
    gulp.watch(folder.src + "**/*.js", ["staticchange"]);
    gulp.watch(folder.src + "src/**/*.jpg", ["staticchange"]);
    gulp.watch(folder.src + "src/**/*.png", ["staticchange"]);
});

// Default serve sequence
gulp.task('serve', function (callback) {
    runSequence(
        'clean:dev',
        ['lessdev', 'staticdev', 'twigdev', 'staticchange'],
        'browsersync'
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

// Move any static files over
var staticFiles = [
    folder.src + 'src/images/**/*',
    folder.src + 'src/publicsans/**/*',
    folder.src + 'styleguide.css',
    folder.src + 'manifest.json'
];
gulp.task('buildstatic', function () {
    gulp.src(staticFiles, { base: folder.src })
        .pipe(gulp.dest(folder.build));
});

// Build LESS
gulp.task('lessbuild', function () {
    gulp.src(folder.src + 'src/less/main.less')
        .pipe(less())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(folder.build + 'src/'))
});

// Minify JS
gulp.task('minifyjs', function () {
    gulp.src(folder.src + 'src/js/**/*')
        // .pipe(replace('"/src/"+jsonFile', '"https://test.wim.usgs.gov/src/"+jsonFile')) // Replace local repos json with live
        .pipe(minify({
            nosource: true,
            ext: {
                src: '',
                min: '.js'
            }
        }))
        .pipe(gulp.dest(folder.build + 'src/js/'))
});

// Compress Images
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
        // .pipe(inject.replace('/styleguide.css', 'https://wim.usgs.gov/styleguide/css/main.css')) Replace Local Styleguide with wim.usgs
        .pipe(inject.replace('https://cdn.jsdelivr.net/npm/vue/dist/vue.js', 'https://cdn.jsdelivr.net/npm/vue')) // Replace Dev Vue with Production
        .pipe(gulp.dest(folder.build))
});

// Clean first, then the rest
gulp.task('build', function (callback) {
    runSequence(
        'clean:build',
        ['buildstatic', 'lessbuild', 'minifyjs'],
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