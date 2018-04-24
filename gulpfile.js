var gulp = require('gulp');
var webpack = require('webpack');
var webpackConf = require('./webpack.config');
var clean = require('gulp-clean');
var src = process.cwd() + '/src';
var assets = process.cwd() + '/assets';
var target = 'd:/wamp/www';

// 清空图片、样式、js
gulp.task('clean', function() {
    gulp.src([target], {read: false})
        .pipe(clean());
});

// run webpack pack
gulp.task('pack', function(done) {
    webpack(webpackConf, function(err, stats) {
        //gutil.log('[webpack]', stats.toString({colors: true}));
        done();
    });
});

// 复制文件到wamp
gulp.task('copy', function() {
    gulp.src([assets + '/**'], {read: false})
        .pipe(gulp.dest(target));
});

gulp.task('js', function() {
    return gulp.src(assets + '/js/*')
        .pipe(gulp.dest(target + '/js'));
});

gulp.task('json', function() {
    return gulp.src(assets + '/json/*')
        .pipe(gulp.dest(target + '/json'));
});

gulp.task('images', function() {
    return gulp.src(assets + '/images/**/*')
        .pipe(gulp.dest(target + '/images'));
});

gulp.task('css', function() {
    return gulp.src(assets + '/css/*')
        .pipe(gulp.dest(target + '/css'));
});

gulp.task('html', function() {
    return gulp.src(assets + '/*.html')
        .pipe(gulp.dest(target));
});

gulp.task('php', function() {
    return gulp.src(assets + '/server/*.php')
        .pipe(gulp.dest(target + '/server'));
});

// gulp.task('watch', function() {
//     gulp.watch(assets + '/*.html', ['html']);
//     gulp.watch(assets + '/css/*', ['css']);
//     gulp.watch(assets + '/js/*', ['js']);
// });

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default',['pack','copy'],function(){
    gulp.start('js','json','images','css','html','php');
});
