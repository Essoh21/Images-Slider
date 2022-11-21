const path = require('path');
const HtmlWabpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].bundlle.js',
    },

    devServer: {
        static: path.resolve(__dirname, "dist"),
        open: true,
        hot: true
    },

    // loaders 
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(js|jsx)$/i,
                use: 'babel-loader',
            },

        ],
    },

    // Plugins 
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlWabpackPlugin({ template: './src/index.html' }),
    ]
};