const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const del = require('del');

// Paths
const paths = {
  html: {
    src: 'src/**/*.html',
    dest: 'dist/'
  },
  css: {
    src: 'src/css/**/*.css',
    dest: 'dist/css/'
  },
  js: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  images: {
    src: 'src/images/**/*',
    dest: 'dist/images/'
  }
};

// Clean dist directory
function clean() {
  return del(['dist']);
}

// Process CSS
function css() {
  return gulp.src(paths.css.src)
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.css.dest));
}

// Process JavaScript
function js() {
  return gulp.src(paths.js.src)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(paths.js.dest));
}

// Process HTML
function html() {
  return gulp.src(paths.html.src)
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true,
      minifyCSS: true,
      minifyJS: true
    }))
    .pipe(gulp.dest(paths.html.dest));
}

// Optimize images
async function images() {
  const imagemin = await import('gulp-imagemin');
  return gulp.src(paths.images.src)
    .pipe(imagemin.default([
      imagemin.gifsicle({interlaced: true}),
      imagemin.mozjpeg({quality: 75, progressive: true}),
      imagemin.optipng({optimizationLevel: 5}),
      imagemin.svgo({
        plugins: [
          {removeViewBox: true},
          {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(gulp.dest(paths.images.dest));
}

// Watch files
function watch() {
  gulp.watch(paths.css.src, css);
  gulp.watch(paths.js.src, js);
  gulp.watch(paths.html.src, html);
  gulp.watch(paths.images.src, images);
}

// Define complex tasks
const build = gulp.series(clean, gulp.parallel(css, js, html, images));
const dev = gulp.series(build, watch);

// Export tasks
exports.clean = clean;
exports.css = css;
exports.js = js;
exports.html = html;
exports.images = images;
exports.watch = watch;
exports.build = build;
exports.dev = dev;
exports.default = build;
