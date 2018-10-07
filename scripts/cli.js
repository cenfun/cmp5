var path = require("path");

var browserSync = require('browser-sync');
var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

var CLI = {

    pack(mode) {

        return new Promise(function(resolve, reject) {
            console.log("start build ...");

            var webpackConf = webpackConfig.create();
            if (mode) {
                webpackConf.mode = mode;
            }

            var filePath = path.resolve(webpackConf.output.path, webpackConf.output.filename);
            console.log(filePath);

            // run webpack
            webpack(webpackConf, function(err, stats) {
                if (err) {
                    console.error(err.stack || err);
                    if (err.details) {
                        console.error(err.details);
                    }
                    resolve(1);
                    return;
                }

                console.log(stats.toString({
                    maxModules: 300,
                    colors: true
                }));

                var info = stats.toJson();
                if (stats.hasWarnings()) {
                    console.warn(info.warnings);
                }

                //stop if error
                if (stats.hasErrors()) {
                    console.error(info.errors);
                    resolve(1);
                    return;
                }

                console.log("finish build: " + filePath);

                resolve(0);

            });

        });
    },

    buildMin() {
        CLI.pack("production").then(function(exitCode) {
            if (exitCode) {
                process.exit(1);
                return;
            }
        });
    },

    build() {
        CLI.pack().then(function(exitCode) {
            if (exitCode) {
                process.exit(1);
                return;
            }
        });
    },

    demo() {

        var demoServer = browserSync.create("demo_server");
        //demoServer.notify("building ...");

        CLI.pack().then(function(exitCode) {
            if (exitCode) {
                process.exit(1);
                return;
            }

            //https://www.npmjs.com/package/browser-sync
            //https://browsersync.io/docs/options
            demoServer.init({
                port: 8080,
                ui: {
                    port: 8081
                },
                files: ["./demo/**/*", "./dist/*", {
                    match: ["./src/**/*"],
                    fn: function(event, file) {
                        console.log(event, file);
                        CLI.pack();
                    }
                }],

                server: ["./demo", "./"]
            });

        });


    }

};

function parseCLI(argv) {
    var cli = {
        command: argv[2],
        args: argv.slice(3)
    };
    return cli;
}

var cli = parseCLI(process.argv);

var handler = CLI[cli.command];
if (handler) {
    handler.apply(CLI, cli.args);
}