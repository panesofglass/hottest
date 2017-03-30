var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        app: "./src/index.tsx",
        vendor: ["react", "react-dom", "handsontable"],
    },
    output: {
        filename: "./dist/bundle.js",
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".ts", ".tsx", ".js"],

        alias: {
            'handsontable': path.join(__dirname, 'node_modules/handsontable/dist/handsontable.full.js'),
            'handsontable.css': path.join(__dirname, 'node_modules/handsontable/dist/handsontable.full.css')
        }
    },
    module: {
        noParse: [/handsontable.full.js/],
        rules: [
            {
                test: /\.css$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",
                    options: "sourceMap"
                }]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: "ts-loader"
            },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: require.resolve('numbro'),
                use: [{
                    loader: 'expose-loader',
                    options: 'numbro', 
                }],
            },
            {
                test: require.resolve('moment'),
                use: [{
                    loader: 'expose-loader',
                    options: 'moment',
                }],
            },
            {
                test: require.resolve('pikaday'),
                use: [{
                    loader: 'expose-loader',
                    options: 'Pikaday',
                }],
            },
            {
                test: require.resolve('zeroclipboard'),
                use: [{
                    loader: 'expose-loader',
                    options: 'ZeroClipboard',
                }],
            }, 
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "./dist/vendor.bundle.js" })
    ]
};