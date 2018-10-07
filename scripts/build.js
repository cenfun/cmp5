var webpack = require("webpack");
var webpackConfig = require("./webpack.config.js");

function build() {

    //browserSync.notify("building ...");

    var myConfig = webpackConfig.create();

    myConfig.output.filename = "cmp5.js";

    //console.log(myConfig);

    // run webpack
    webpack(myConfig, function(err, stats) {
        if (err) {
            console.error(err.stack || err);
            if (err.details) {
                console.error(err.details);
            }
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
            return;
        }

        console.log("built");
    });

}

build();