gulp = require('gulp')
pl = require('gulp-load-plugins')()

dist = 
  dir:   "./dist"
  dirJs: "./dist/scripts/"
  js:    "rogue.js"

gulp.task 'scripts', ->
  gulp.src(["app/scripts/main.js", "app/scripts/*.js"])
    .pipe(pl.concat(dist.js))
    .pipe(gulp.dest(dist.dirJs))
    .pipe(pl.connect.reload())

gulp.task 'html', ->
  gulp.src('app/*.html')
    .pipe(gulp.dest(dist.dir))
    .pipe(pl.connect.reload())

gulp.task 'connect', ["scripts", "html"], ->
  pl.connect.server(
    root: './',
    livereload: true
  )

gulp.task 'server', ['connect'], ->
  gulp.src('./dist/index.html')
    .pipe(pl.open('', {url: 'http://localhost:8080/dist/index.html'}))

gulp.task 'watch', ['connect'], ->
  gulp.watch('app/**/*.html', ['html'])
  gulp.watch('app/scripts/*.js', ['scripts'])

gulp.task 'default', ["server", "watch"], ->
  gulp.src('./dist/index.html')
    .pipe(pl.open())

