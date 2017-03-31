var path = require("path");

//https://webpack.js.org/configuration/
module.exports = {
    entry: "./src/cmp.js",
    output: {
        path: path.join(__dirname, "./build"),
        library: "cmp5",
        libraryTarget: "umd",
        umdNamedDefine: true
    },
    externals: ["jquery"],
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }]
        }, {
            test: /^.*\.(png|jpg|gif)$/,
            use: "url-loader"
        }, {
            test: /\.json$/,
            use: 'json-loader'
        }, {
            test: /\.txt$/,
            use: 'raw-loader'
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true,
                    removeComments: true,
                    collapseWhitespace: true
                }
            }]
        }]
    },
    plugins: []

};