const gulp = require('gulp'),
  sass = require('gulp-sass'),
  purify = require('gulp-purifycss'),
  sourcemaps = require('gulp-sourcemaps'),
  imagemin = require('gulp-imagemin'),
  uglify = require('gulp-uglify'),
  babel = require('gulp-babel'),
  browserSync = require('browser-sync').create();

const distDir = 'dist',
  srcDir = 'src';


gulp.task('css', () => {
  return gulp.src(`${srcDir}/sass/**/*.scss`)
    .pipe(sourcemaps.init())
    .pipe(sass({
      outputStyle: 'compressed'
    }).on('error', sass.logError))
    //.pipe(purify([`${srcDir}/js/**/*.js`, `${srcDir}/*.html`]))
    .pipe(sourcemaps.write(`./maps`))
    .pipe(gulp.dest(`${distDir}/css`))
    .pipe(browserSync.stream());
});

gulp.task('js', () => {
  return gulp.src(`${srcDir}/js/**/*.js`)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write(`./maps`))
    .pipe(gulp.dest(`${distDir}/js`));
});

gulp.task('html', () => {
  return gulp.src(`${srcDir}/*.html`)
    .pipe(gulp.dest(distDir));
});

gulp.task('img', () => {
  return gulp.src(`${srcDir}/img/**/*.+(jpg|jpeg|png|svg|gif)`)
    .pipe(imagemin())
    .pipe(gulp.dest(`${distDir}/img`));
});

gulp.task('server', () => {
  browserSync.init({
    server: {
      baseDir: distDir
    }
  });
});

gulp.task('watch', () => {
  gulp.watch(`${srcDir}/sass/**/*.scss`, ['css']);
  gulp.watch(`${srcDir}/js/**/*.js`, ['js']);
  gulp.watch(`${srcDir}/**/*.html`, ['html']);
  gulp.watch(`${srcDir}/img/**/*.+(jpg|jpeg|png|svg|gif)`, ['img']);
  gulp.watch(`${srcDir}/**/*.+(html|js)`).on('change', browserSync.reload);
});

gulp.task('default', ['css','js','html','img','watch','server']);
