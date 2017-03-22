"use strict";
var child_process = require("child_process");

var gulp = require('gulp');
var gutil = require("gulp-util");

var webpack = require("webpack");
//var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.config.js");

var browserSync = require('browser-sync').create("my_demo_server");


gulp.task("build", ["build-minify"], function(callback) {
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
        //proxy: "http://www.bbc.co.uk"
        server: ["./build", "./demo"]
    });

    /*
    var myConfig = Object.create(webpackConfig);

    // Start a webpack-dev-server
    var compiler = webpack(myConfig);


    new WebpackDevServer(compiler, {
        // server and middleware options

        inline: true,

        compress: true,
        contentBase: "./demo",
        publicPath: "./demo",
        headers: {}



    }).listen(8080, "localhost", function(err) {
        if (err) {
            throw new gutil.PluginError("preview", err);
        }

        var url = "http://localhost:8080/";

        // Server listening
        console.log("[preview]", url);

        //child_process.exec('start explorer "' + url + '"');

        // keep the server alive or continue?
        callback();
    });
    */
});

gulp.task('watch', function() {
    gulp.watch(["./src/**/*"], ['build']);
    gulp.watch(["./demo/**/*"]).on('change', function() {
        browserSync.reload();
        browserSync.notify("demo <span color='green'>change</span>");
    });
});


gulp.task('default', ['build', 'watch', 'preview']);
