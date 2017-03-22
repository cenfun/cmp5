"use strict";

//var child_process = require("child_process");

var gulp = require('gulp');
var gutil = require("gulp-util");

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var browserSync = require('browser-sync').create("my_demo_server");


gulp.task("build", ["build-minify"], function(callback) {

    browserSync.notify("building ...");

    var myConfig = Object.create(webpackConfig);
    myConfig.output.filename = "cmp5.js";
    myConfig.devtool = "#source-map";
    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError("build", err);
        }
        browserSync.reload();
        callback();
    });
});

gulp.task("build-minify", function(callback) {

    browserSync.notify("minify building ...");

    var myConfig = Object.create(webpackConfig);

    //add.min for filename
    myConfig.output.filename = "cmp5.min.js";

    myConfig.plugins = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                drop_console: true,
                warnings: false
            },
            output: {
                comments: false
            }
        })
    ];
    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) {
            throw new gutil.PluginError("build", err);
        }
        callback();
    });
});


gulp.task("preview", function(callback) {

    browserSync.init({
        port: 8080,
        ui :{
            port: 8081
        },
        //proxy: "http://www.bbc.co.uk"
        server: ["./build", "./demo"]
    });

});

gulp.task('watch', function() {
    gulp.watch(["./src/**/*"], ['build']);
    gulp.watch(["./demo/**/*"]).on('change', function() {
        browserSync.reload();
    });
});


gulp.task('default', ['build', 'watch', 'preview']);
