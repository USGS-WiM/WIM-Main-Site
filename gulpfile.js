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
var minify = require('gulp-minify');
var cleanCSS = require('gulp-clean-css');
var inject = require('gulp-inject-string');
var fileinclude = require('gulp-file-include');



var folder = {
	source: 'app/',
	development: 'builds/development/',
    production: 'builds/production/'
}


// Serve Development
// Serve Development
// Serve Development

// Clean Dev Folder
gulp.task('clean:dev', function () {
    return del.sync(folder.development);
})

// Move static files
// Non js/html/code files
var devFiles = [
    folder.source + 'src/images/**/*',
    folder.source + 'src/publicsans/**/*',
    folder.source + 'src/js/vendor/**/*.js',
    folder.source + 'styleguide.css',
    folder.source + 'manifest.json'
];
gulp.task('devFiles', function () {
    gulp.src(devFiles, { base: folder.source })
        .pipe(gulp.dest(folder.development));
});

// File Include
gulp.task('devIncludes', function() {
	 gulp.src([folder.source + '**/*.html'])
	 .pipe(fileinclude({
		prefix: '@@',
		basepath: '@file'
	 }))
	.pipe(gulp.dest(folder.development))
	.pipe(browserSync.stream());
});

// Compile less
gulp.task('lessDev', function () {
    return gulp.src(folder.source + 'src/less/main.less')
        .pipe(less())
        .pipe(gulp.dest(folder.development + 'src/'))
        .pipe(browserSync.stream());
});

// Changes to JS or other (image) files in /app folder
gulp.task('staticChange', function () {
	gulp.src(folder.source + 'src/**/*', { base: folder.source })
	.pipe(gulp.dest(folder.development))
	.pipe(browserSync.stream());
});

// Browsersync
// Serve from Dev Build
gulp.task('browsersync', function () {
    browserSync.init({
        server: folder.development
    });

    gulp.watch(folder.source + "**/*.html", ['devIncludes']);
    gulp.watch(folder.source + "src/less/**/*.less", ['lessDev']);
    gulp.watch(folder.source + "**/*.js", ["staticChange"]);
    gulp.watch(folder.source + "src/**/*.jpg", ["staticChange"]);
    gulp.watch(folder.source + "src/**/*.png", ["staticChange"]);
});

// Default serve sequence
gulp.task('serve', function (callback) {
    runSequence(
		'clean:dev',
		['staticChange', 'devFiles'],
		['devIncludes'],
		['lessDev'],
        'browsersync'
    )
})

// Default Task
gulp.task('default', ['serve']);




// Production Build sequence
// Production Build sequence
// Production Build sequence

// Clean production folder
gulp.task('clean:prod', function () {
    return del.sync(folder.production);
})

// Move any static files over to prod
var staticFiles = [
    folder.source + 'src/images/**/*',
    folder.source + 'src/**/*.json',
    folder.source + 'src/publicsans/**/*',
    folder.source + 'src/js/vendor/**/*.js',
    folder.source + 'styleguide.css',
    folder.source + 'manifest.json'
];
gulp.task('buildFiles', function () {
    gulp.src(staticFiles, { base: folder.source })
        .pipe(gulp.dest(folder.production));
});

// File Include
gulp.task('buildIncludes', function() {
	gulp.src([folder.source + '**/*.html'])
	.pipe(fileinclude({
	   prefix: '@@',
	   basepath: '@file'
	}))
   .pipe(gulp.dest(folder.production))
});

// Compile LESS
gulp.task('lessBuild', function () {
    return gulp.src(folder.source + 'src/less/main.less')
		.pipe(less())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest(folder.production + 'src/'))
});

// Minify JS
gulp.task('minifyJS', function () {
    gulp.src(folder.source + 'src/js/**/*')
        // .pipe(replace('"/src/"+jsonFile', '"https://test.wim.usgs.gov/src/"+jsonFile')) // Replace local repos json with live
        .pipe(minify({
            nosource: true,
            ext: {
                src: '',
                min: '.js'
            }
        }))
        .pipe(gulp.dest(folder.production + 'src/js/'))
});

// Compress Images
gulp.task('images', function () {
    var out = folder.production + 'src/images/';
    return gulp.src(folder.source + 'src/images/**/*')
        .pipe(newer(out))
        .pipe(imagemin({ optimizationLevel: 5 }))
        .pipe(gulp.dest(out));
});

// Clean first, then the rest
gulp.task('build', function (callback) {
    runSequence(
		'clean:prod',
		['buildFiles'],
		['buildIncludes'],
		['lessBuild', 'minifyJS'],
		// 'images'
        callback
    )
})

// Serve From Build
gulp.task('serve-build', function () {
    browserSync.init({
        server: folder.production
    });
});