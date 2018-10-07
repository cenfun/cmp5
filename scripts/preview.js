var browserSync = require('browser-sync').create("my_demo_server");

function preview() {
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

};

preview();