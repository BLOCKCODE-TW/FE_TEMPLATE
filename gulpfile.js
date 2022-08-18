/* 記得修改 project_name */
const project_name = "FE_TEMPLATE";

/* 程式區塊 */
const gulp = require("gulp");
const $ = require("gulp-load-plugins")({ lazy: false });
const sass = require("gulp-sass")(require("sass"));
const fileinclude = require("gulp-file-include");
const rename = require("gulp-rename");
const imagemin = require("gulp-image");
const browserSync = require("browser-sync").create();

const staticFiles = ["./src/**/*"];

const project_src = "./src",
  distPath = `./dist/${project_name}`;

const source = {
  html: [project_src + "/**/*.html"],

  htmlInclude: [project_src + "/partials/"],

  js: [project_src + "/**/*.js"],

  scss: [project_src + "/**/*.scss", project_src + "/**/*.min.css"],

  image: [project_src + "/images/**/*.*"],
};

function clean() {
  return gulp
    .src(distPath, {
      read: false,
      allowEmpty: true,
    })
    .pipe($.clean());
}

// 將sass編譯成css
function buildStyles() {
  return gulp
    .src(source.scss)
    .pipe(sass())
    .pipe(
      rename(function (path) {
        path.dirname = path.dirname.replace("scss", "css");
      })
    )
    .pipe(gulp.dest(distPath))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

// HTML function
function buildHtml() {
  return gulp
    .src(source.html)
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest(distPath))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

function buildScripts() {
  return gulp
    .src(source.js)
    .pipe(gulp.dest(distPath))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

function compressImage() {
  return gulp
    .src(source.image)
    .pipe(
      imagemin({
        progressive: true,
      })
    )
    .pipe(gulp.dest(`${distPath}/images`))
    .pipe(
      browserSync.reload({
        stream: true,
      })
    );
}

// function copy() {
//     return gulp.src(staticFiles)
//         .pipe(gulp.dest(distPath))
//         .pipe(
//             browserSync.reload({
//                 stream: true,
//             }),
//         );
// }

function synchronize() {
  browserSync.init({
    server: {
      baseDir: distPath,
    },
    port: 8080,
  });
}

function watch() {
  gulp.watch(
    staticFiles,
    gulp.series(buildHtml, buildStyles, buildScripts, compressImage)
  );
}

function deploy() {
  return gulp.src(`${distPath}/**/*`).pipe($.ghPages());
}

exports.default = gulp.series(
  clean,
  buildStyles,
  buildHtml,
  buildScripts,
  compressImage,
  gulp.parallel(synchronize, watch)
);

exports.clean = clean;
exports.build = gulp.series(
  clean,
  buildHtml,
  buildStyles,
  buildScripts,
  compressImage
);
exports.deploy = deploy;
