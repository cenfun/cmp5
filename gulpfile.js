"use strict";

//var child_process = require("child_process");

var gulp = require('gulp');
var gutil = require("gulp-util");

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var browserSync = require('browser-sync').create("my_demo_server");


gulp.task('default', ['build', 'preview', 'watch']);


gulp.task("build", function() {

    browserSync.notify("building ...");

    var myConfig = Object.create(webpackConfig);
    myConfig.output.filename = "cmp5.js";
    myConfig.devtool = "#source-map";

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
        browserSync.reload();
    });

});

gulp.task("preview", function() {
    //https://www.npmjs.com/package/browser-sync
    //https://browsersync.io/docs/options
    browserSync.init({
        port: 8080,
        ui: {
            port: 8081
        },
        //proxy: ""
        server: ["./demo", "./build"]
    });

});

gulp.task('watch', function() {
    gulp.watch(["./src/**/*"], ['build']);
    gulp.watch(["./demo/**/*", "./build/**/*"]).on('change', function() {
        browserSync.reload();
    });
});
