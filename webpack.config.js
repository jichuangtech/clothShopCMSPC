const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: __dirname,
        filename: "./build/bundle.js",
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react',
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            test: /\.(png|jpg|svg)$/,
            loader: 'url-loader?limit=8192'
        }]
    }
};