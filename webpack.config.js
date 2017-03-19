var path = require("path");
module.exports = {
    entry: "./src/cmp5.js",
    output: {
        path: path.join(__dirname, "./build"),
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    module: {
        loaders: [{
            test: /^.*\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /^.*\.(png|jpg)$/,
            loader: 'url-loader'
        }, {
            test: /\.json$/,
            loader: "json"
        }]
    },
    plugins: []

};