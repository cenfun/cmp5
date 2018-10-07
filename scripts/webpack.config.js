var path = require("path");
module.exports = {
    create() {

        var webpackConf = {
            mode: "development",

            entry: path.resolve(__dirname, "../src/index.js"),

            output: {
                path: path.resolve(__dirname, "../dist/"),
                library: "cmp5",
                libraryTarget: "umd",
                umdNamedDefine: true
            },
            devtool: "source-map",
            module: {
                rules: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            babelrc: false,
                            plugins: [],
                            presets: ["@babel/preset-env"]
                        }
                    }
                }, {
                    test: /\.scss$/,
                    use: [{
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }]
                }, {
                    test: /\.html$/,
                    use: {
                        loader: 'html-loader',
                        options: {
                            minimize: true,
                            removeComments: true,
                            collapseWhitespace: true,
                            removeAttributeQuotes: false
                        }
                    }
                }, {
                    test: /^.*\.(png|jpg|gif)$/,
                    use: "url-loader"
                }]
            },
            resolveLoader: {
                modules: [path.resolve(__dirname, "../node_modules")]
            },
            plugins: []

        };

        return webpackConf;


    }
};