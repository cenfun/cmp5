"use strict";

//var child_process = require("child_process");

var gulp = require('gulp');
var gutil = require("gulp-util");

var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");
var wiredep = require("wiredep");
var browserSync = require('browser-sync').create("my_demo_server");


gulp.task('default', ['build', "wiredep", 'preview', 'watch']);


gulp.task("build", function() {

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
    });

});

gulp.task("min", function() {

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
        server: ["./demo", "./build", "./bower_components"]
    });

});

gulp.task('watch', function() {
    gulp.watch(["./src/**/*"], ['build']);
    gulp.watch(["./demo/**/*", "./build/**/*"]).on('change', function() {
        browserSync.reload();
    });
});


gulp.task("wiredep", function() {

    //https://www.npmjs.com/package/wiredep
    wiredep({

        src: './demo/index.html',

        //cwd: "./",

        // default: '.bowerrc'.directory || bower_components 
        //directory: 'bower_components',
        // default: require('./bower.json') 
        //bowerJson: 'bower.json',

        dependencies: true,
        devDependencies: true,
        includeSelf: true,
        exclude: [],

        ignorePath: /\.\.\/.+?\//,

        fileTypes: {
            html: {
                block: /(([ \t]*)<!--\s*bower:*(\S*)\s*-->)(\n|\r|.)*?(<!--\s*endbower\s*-->)/gi,
                detect: {
                    js: /<script.*src=['"]([^'"]+)/gi,
                    css: /<link.*href=['"]([^'"]+)/gi
                },
                replace: {
                    js: '<script src="{{filePath}}"></script>',
                    css: '<link rel="stylesheet" href="{{filePath}}" />'
                }
            }

        }

    });
});